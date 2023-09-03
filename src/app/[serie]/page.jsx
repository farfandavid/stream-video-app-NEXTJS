import Link from "next/link";

const series = async (serie) => {

  const { capitulos } = await fetch(`http://localhost:3000/api/${serie}`)
    .then((res) => res.json())
    .then(data => {
      return data
    })
  return capitulos
}

async function Serie({ params }) {
  const serie = await series(params.serie);
  console.log(params)


  return (
    <div className="text-white">
      <h1>Capitulos</h1>
      {serie.map(cap =>
        <Link key={cap.id} href={`/${params.serie}/${cap.id}`}><p className="py-1">{cap.titulo}</p></Link>
      )}
    </div>
  );




}

export default Serie;