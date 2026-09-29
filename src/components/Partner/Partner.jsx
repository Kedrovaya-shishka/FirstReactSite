import { useState } from 'react'
import Arrows from '../Arrows/Arrows'
import './Partner.scss'

const cards = [
  {
    title: 'Collaboration',
    text: 'Creating game-changing impact through collaboration, sharing ideas and information in a supportive, pre-competitive structure.',
  },
  {
    title: 'Scale',
    text: 'Travalyst’s connections and access to world-renowned sustainability specialists and academics enable us to scale initiatives at speed.',
  },
  {
    title: 'Networking',
    text: 'Being part of a group of energising collaborators with a shared focus on changing the industry for the better.',
  },
]

export default function Partner() {
  const [index, setIndex] = useState(0)

  return (
    <section className="panel partner" id="partner">
      <div className="wrap">
        <h2>Become a Partner</h2>
        <p>
          Travalyst partners are part of a global network of change-makers,
          independent experts and academics – all working together to create
          viable, visible sustainability solutions. Fundamentals of our
          partnership include:
        </p>
      </div>
      <div className="viewport">
        <div className="track" style={{ '--i': index }}>
          {cards.map((c, i) => (
            <article key={c.title}>
              <span className="n">{i + 1}</span>
              <div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="wrap bar">
        <button className="more">Learn More</button>
        <Arrows index={index} count={cards.length} setIndex={setIndex} />
      </div>
    </section>
  )
}
