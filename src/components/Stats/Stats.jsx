import star from '../../assets/Bash.png'
import balloon from '../../assets/Voz.png'
import './Stats.scss'

export default function Stats() {
  return (
    <section className="stats">
      <div className="left">
        <h2>Travellers want to travel more sustainably:</h2>

        <div className="stat">
          <div className="num">
            <span className="big">71</span> %
          </div>
          <p>
            of travellers want to make more effort in the next year to travel
            more sustainably, up 10% from 2021
          </p>
          <button className="circle">
            <img src={star} alt="" />
          </button>
        </div>

        <div className="stat">
          <div className="num">
            <span className="big">68</span> mn
          </div>
          <p>have selected lower emissions flights on Skyscanner since 2019</p>
          <button className="circle">
            <img src={star} alt="" />
          </button>
        </div>

        <div className="stat">
          <div className="num">
            <span className="big">7</span> in 10
          </div>
          <p>
            feel overwhelmed by starting the process of being a more sustainable
            traveller
          </p>
          <button className="circle">
            <img src={star} alt="" />
          </button>
        </div>

        <p className="note">
          It’s not always easy for travellers to know whether they are making
          good choices from a sustainability perspective, even when they want
          to. This is why we are bringing the industry together to help make it
          clearer to consumers what to look for.
        </p>
      </div>
      <img className="balloon" src={balloon} alt="" />
    </section>
  )
}
