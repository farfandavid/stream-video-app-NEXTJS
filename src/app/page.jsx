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
          <div key={ser.id + "serie"}>
            <Link href={'/' + ser.name}><img src={ser.portrait} /></Link>
          </div>
        )
      })}
    </main>
  )
}
