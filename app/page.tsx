import Link from 'next/link'
import styles from '../components/styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="newsFlash">NewsFlash</h1>
      </div>
      <nav>

        <Link href="/Majandus">Majandus</Link>
        <Link href="/Sport">Sport</Link>
        <Link href="/Maailm">Maailm</Link>
        <Link href="/Eesti">Eesti</Link>
        <Link href="/Kultuur">Kultuur</Link>
        <Link className="last-child" href="/login">LOGI SISSE</Link>

      </nav>
      <div className="search-container">
        <label htmlFor="searchbar">Otsi: </label>
        <input id="searchbar" type="text" placeholder=" Märksõna"></input>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="date_checkboxDay" name="date_checkboxDay" value="day" ></input>
        <label htmlFor="date_checkboxDay">Tänased uudised</label>
        <input type="checkbox" id="date_checkboxWeek" name="date_checkboxWeek" value="week" ></input>
        <label htmlFor="date_checkboxWeek">Viimase 7 päeva uudised</label>
        <div id="timeframe">

          <input id="searchbarFrom" type="text" placeholder="Alates"></input>
          <input id="searchbarUntil" type="text" placeholder="Kuni"></input>
        </div>
      </div>
    </main>
  )
}