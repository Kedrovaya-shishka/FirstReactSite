import logo from '../../assets/Group.png'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <header>
        <img src={logo} alt="Travalyst" />
        <a href="#partner">For Industry</a>
      </header>
      <h1>
        Convening the Travel Industry
        <br />
        for a More Sustainable Future
      </h1>
    </section>
  )
}
