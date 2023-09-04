import Link from "next/link";

const series = async (serie) => {

  const { capitulos, portrait } = await fetch(`http://localhost:3000/api/${serie}`)
    .then((res) => res.json())
    .then(data => {
      return data
    })
  return { capitulos, portrait }
}

async function Serie({ params }) {
  const { capitulos: serie, portrait } = await series(params.serie);
  console.log(params)


  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col text-white justify-center items-center w-[calc(80vw)]">
        <h1 className="font-bold">Capitulos</h1>
        <div className="flex justify-around items-center w-full">
          <img src={portrait} className="w-[35%] h-auto flex self-start m-2 p-2" />
          <div className="flex flex-col bg-slate-950 bg-opacity-75 px-10">
            {serie.map(cap =>
              <Link className="p-1 m-1 border-b-red-100 border-b-[1px] hover:bg-slate-600" key={cap.id} href={`/${params.serie}/${cap.id}`}><p>{cap.titulo}</p></Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );




}

export default Serie;