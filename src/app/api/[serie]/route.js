import { NextResponse } from "next/server"
import fsPromises from 'fs/promises'
import path from 'path';

const serie = async (name) => {
  const filePath = path.join(process.cwd(), 'public/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  const res = objectData.series.filter(serie => serie.name === name)
  return res;
}


async function GET(req, { params }) {
  const res = await serie(params.serie);
  //console.log(params)
  //console.log(res[0])
  //console.log(req.nextUrl.searchParams.get("cap"))
  /* const capitulo = req.nextUrl.searchParams.get("cap");
  if (capitulo) {
    //console.log()
    return NextResponse.json(res[0].capitulos.filter(cap => cap.id == capitulo))
  } */
  console.log(params)

  return NextResponse.json(res[0])
}

export { GET }