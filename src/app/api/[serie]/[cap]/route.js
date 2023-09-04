import { NextRequest, NextResponse } from "next/server"
import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path';

const serie = async (name, capID) => {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  const res = objectData.series.filter(serie => serie.name === name)
  const { capitulos } = res[0]
  const cap = capitulos.filter(capi => capi.id == capID)
  return cap[0];
}

async function GET(req, { params }) {
  const res = await serie(params.serie, params.cap)
  //const range = 0
  const range = req.headers.get('range')
  const range2 = range === null ? 0 : range.substring(6, range.length - 1)
  const videoPath = res.url
  const videoSize = fs.statSync(videoPath).size
  const chunkSize = 1 * 1e6;
  const start = Number(range2)
  const end = Math.min(start + chunkSize, videoSize - 1)
  const contentLength = end - start + 1;
  //console.log(params)
  const stream = fs.createReadStream(videoPath, {
    start,
    end
  })

  return new Response(stream, {
    status: 206,
    headers: {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4"
    }
  })
}

export { GET }