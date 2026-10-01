import a from '../../assets/ffon.png'
import b from '../../assets/fffon.png'
import c from '../../assets/ffffon.png'
import './Frameworks.scss'

export default function Frameworks() {
  return (
    <section className="frameworks">
      <h2>We're aligning on sustainability frameworks, across the industry</h2>

      <div className="cards">
        <div className="card" style={{ backgroundImage: `url(${a})` }}>
          <div>
            <h3>Aviation</h3>
            <p>View Framework</p>
          </div>
          <span>→</span>
        </div>
        <div className="card" style={{ backgroundImage: `url(${b})` }}>
          <div>
            <h3>Accommodation</h3>
            <p>View Framework</p>
          </div>
          <span>→</span>
        </div>
        <div className="card" style={{ backgroundImage: `url(${c})` }}>
          <div>
            <h3>Coming Soon</h3>
            <p>We’ll be working on more</p>
          </div>
          <span>→</span>
        </div>
      </div>

      <div className="bottom">
        <div className="texts">
          <p>
            By coming together, we create a shared understanding of what
            sustainability means, and source reliable sustainability data that
            is consistent across the industry. That data includes everything
            from a hotel’s individual practices to route-based carbon emissions
            calculations for flights. This then allows trusted travel platforms
            to display credible, easy-to-understand information for their
            customers.
          </p>
          <p>
            Working closely with academics and travel experts, our data-driven,
            collaborative approach is helping to streamline and scale the
            provision of sustainability information, meeting the growing demand
            from travellers.
          </p>
        </div>
        <div className="arrows">
          <button className="circle">←</button>
          <button className="circle">→</button>
        </div>
      </div>
    </section>
  )
}
