import Link from "next/link";



const series = async () => {
  const { series } = await fetch('http://localhost:3000/api')
    .then(async (res) => await res.json())
    .then(data => {
      return data
    })
  return series
}

export default async function Home() {

  const serie = await series();
  return (
    <main>
      {serie.map((ser) => {
        return (
          <div className="flex flex-wrap gap-2 mx-2 p-2" key={ser.id + "serie"}>
            <Link className="w-1/5" href={'/' + ser.name}><img className="rounded-lg" src={ser.portrait} /></Link>
            <Link className="w-1/5" href={'/' + ser.name}><img className="rounded-lg" src={ser.portrait} /></Link>
            <Link className="w-1/5" href={'/' + ser.name}><img className="rounded-lg" src={ser.portrait} /></Link>
            <Link className="w-1/5" href={'/' + ser.name}><img className="rounded-lg" src={ser.portrait} /></Link>
          </div>
        )
      })}
    </main>
  )
}
