import { NextResponse } from "next/server"
import fsPromises from 'fs/promises'
import path from 'path';

async function GET() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());

  return NextResponse.json(objectData)
}



export { GET }