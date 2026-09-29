import { useState } from 'react'
import Arrows from '../Arrows/Arrows'
import a from '../../assets/ffon.png'
import b from '../../assets/fffon.png'
import c from '../../assets/ffffon.png'
import './Frameworks.scss'

const cards = [
  { img: a, title: 'Aviation', sub: 'View Framework' },
  { img: b, title: 'Accommodation', sub: 'View Framework' },
  { img: c, title: 'Coming Soon', sub: 'We’ll be working on more' },
]

export default function Frameworks() {
  const [index, setIndex] = useState(0)

  return (
    <section className="panel frameworks">
      <div className="wrap">
        <h2>
          We're aligning on sustainability frameworks, across the industry
        </h2>
      </div>
      <div className="viewport">
        <div className="track" style={{ '--i': index }}>
          {cards.map((card) => (
            <article
              key={card.title}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div>
                <h3>{card.title}</h3>
                <p>{card.sub}</p>
              </div>
              <span className="go">→</span>
            </article>
          ))}
        </div>
      </div>
      <div className="wrap bar">
        <div>
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
        <Arrows index={index} count={cards.length} setIndex={setIndex} />
      </div>
    </section>
  )
}
