import ama from '../../assets/ama.png'
import book from '../../assets/Book.png'
import exp from '../../assets/exp.png'
import goog from '../../assets/Goog.png'
import sky from '../../assets/Sky.png'
import trav from '../../assets/Trav.png'
import trip from '../../assets/Trip.png'
import './Partners.scss'

export default function Partners() {
  return (
    <section className="partners">
      <h2>
        Founded by Prince Harry, The Duke of Sussex, Travalyst is a coalition of
        some of the biggest names in travel:
      </h2>
      <div className="logos">
        <img src={ama} alt="" />
        <img src={book} alt="" />
        <img src={exp} alt="" />
        <img src={goog} alt="" />
        <img src={sky} alt="" />
        <img src={trav} alt="" />
        <img src={trip} alt="" />
      </div>
      <p>
        Our mission is to make the travel industry more sustainable. We do this
        by convening leading industry players in a pre-competitive coalition to
        collaborate on bringing consistent sustainability information to the
        mainstream for the first time. This means we can empower consumers to
        make better choices: for themselves, and for the planet.
      </p>
    </section>
  )
}
