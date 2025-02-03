import Header from './components/Header'
import Entry from './components/Entry'
import data from './data'

console.log(data);

export default function App() {

  const entryElements = data.map((entry) => {
    return (
      <Entry 
        img={entry.img }
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        title={entry.title}
        dates={entry.dates}
        text={entry.text}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="pageContainer">
        {entryElements}
      </main>
    </>
  )
}