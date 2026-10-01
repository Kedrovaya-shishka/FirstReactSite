import kav from '../../assets/Kav.png'
import chel from '../../assets/Chel.png'
import min from '../../assets/Min.png'
import ali from '../../assets/Ali.png'
import girl from '../../assets/Girll.png'
import gigi from '../../assets/Gigi.png'
import './Quotes.scss'

export default function Quotes() {
  return (
    <section className="quotes">
      <div className="top">
        <img src={kav} alt="" />
        <div className="text">
          <h2>
            At Travalyst, we’re bringing travellers, communities, and the travel
            industry to the table to change the way we see and share the world.
          </h2>
          <p>
            By working with Travalyst and our industry partners, we aim to build
            tools and technology that enable travelers and businesses around the
            world to prioritize sustainability.”
          </p>
        </div>
      </div>

      <div className="row">
        <button className="circle">←</button>
        <div className="avatars">
          <img className="big" src={chel} alt="" />
          <img className="small" src={min} alt="" />
          <img className="small" src={ali} alt="" />
          <img className="small" src={girl} alt="" />
          <img className="small" src={gigi} alt="" />
        </div>
        <button className="circle">→</button>
      </div>

      <p className="who">
        Prince Harry
        <br />
        The Duke of Sussex
      </p>
    </section>
  )
}
