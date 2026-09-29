import ama from '../../assets/ama.png'
import book from '../../assets/Book.png'
import exp from '../../assets/exp.png'
import goog from '../../assets/Goog.png'
import sky from '../../assets/Sky.png'
import trav from '../../assets/Trav.png'
import trip from '../../assets/Trip.png'
import './Partners.scss'

const logos = [ama, book, exp, goog, sky, trav, trip]

export default function Partners() {
  return (
    <section className="panel partners wrap">
      <p className="intro">
        Founded by Prince Harry, The Duke of Sussex, Travalyst is a coalition of
        some of the biggest names in travel:
      </p>
      <div className="logos">
        {/* один img на каждый элемент массива */}
        {logos.map((src, i) => (
          <img key={i} src={src} alt="" />
        ))}
      </div>
      <p className="mission">
        Our mission is to make the travel industry more sustainable. We do this
        by convening leading industry players in a pre-competitive coalition to
        collaborate on bringing consistent sustainability information to the
        mainstream for the first time. This means we can empower consumers to
        make better choices: for themselves, and for the planet.
      </p>
    </section>
  )
}
