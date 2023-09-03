import Link from "next/link";

const series = async (serie, idCapitulo) => {
  const { capitulos } = await fetch(`http://localhost:3000/api/${serie}`)
    .then(async (res) => await res.json())
    .then(data => {
      return data
    })
  return capitulos
}

async function capitulo({ params }) {
  //console.log(await series(params.serie))
  return (
    <div>
      <Link href={'/'} className="bg-white rounded p-2 m-2" >Home</Link>
      <h1 className="text-white m-2"></h1>
      <video className="m-2" controls>
        <source src="http://localhost:3000/api/inuyasha/1" type="video/mp4" />
      </video>
      <a href={'/'} className="bg-white rounded p-2 m-2">Anterior</a>
      <a href={'/inuyasha/2'} className="bg-white rounded p-2 m-2">Siguiente</a>
    </div>
  );
}

export default capitulo;
/*
 if (searchParams.cap) {

    const capitulo = serie.filter(cap => cap.id == searchParams.cap);
    const siguiente = () => {
      var actual = parseInt(capitulo[0].id);
      if (actual == 26) {
        return actual
      }
      return actual + 1
    }

    const anterior = () => {
      var actual = parseInt(capitulo[0].id);
      if (actual > 1) {
        return actual - 1
      }
      return actual
    }
    return (
      <div>
        <Link href={'/'} className="bg-white rounded p-2 m-2" >Home</Link>
        <h1 className="text-white m-2">{capitulo[0].titulo}</h1>
        <video className="m-2" controls>
          <source src={capitulo[0].url} type="video/mp4" />
        </video>
        <a href={'/'} className="bg-white rounded p-2 m-2">Anterior</a>
        <a href={'/'} className="bg-white rounded p-2 m-2">Siguiente</a>
      </div>

    )
  } 
*/