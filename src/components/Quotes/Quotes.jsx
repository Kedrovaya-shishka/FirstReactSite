import { useState } from 'react'
import kav from '../../assets/Kav.png'
import chel from '../../assets/Chel.png'
import min from '../../assets/Min.png'
import ali from '../../assets/Ali.png'
import girl from '../../assets/Girll.png'
import gigi from '../../assets/Gigi.png'
import './Quotes.scss'


const placeholder = 'Replace this text with the quote from the design.'
const people = [
  {
    photo: chel,
    name: 'Prince Harry',
    role: 'The Duke of Sussex',
    quote:
      'At Travalyst, we’re bringing travellers, communities, and the travel industry to the table to change the way we see and share the world.',
    text: 'By working with Travalyst and our industry partners, we aim to build tools and technology that enable travelers and businesses around the world to prioritize sustainability.”',
  },
  {
    photo: min,
    name: 'Partner name',
    role: 'Travalyst partner',
    quote: placeholder,
    text: placeholder,
  },
  {
    photo: ali,
    name: 'Partner name',
    role: 'Travalyst partner',
    quote: placeholder,
    text: placeholder,
  },
  {
    photo: girl,
    name: 'Partner name',
    role: 'Travalyst partner',
    quote: placeholder,
    text: placeholder,
  },
  {
    photo: gigi,
    name: 'Partner name',
    role: 'Travalyst partner',
    quote: placeholder,
    text: placeholder,
  },
]

export default function Quotes() {
  const [current, setCurrent] = useState(0)
  const person = people[current]

  return (
    <section className="panel quotes wrap">
      <div className="grid">
        <img className="mark" src={kav} alt="" />
        <div>
          <h2>{person.quote}</h2>
          <p className="text">{person.text}</p>
        </div>

        <button
          className="circle"
          aria-label="Previous"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          ←
        </button>
        <div className="row">
          <div className="avatars">
            {people.map((p, i) => (
              <button
                key={i}
                className={i === current ? 'on' : ''}
                onClick={() => setCurrent(i)}
                aria-label={`Show quote ${i + 1}`}
              >
                <img src={p.photo} alt="" />
              </button>
            ))}
          </div>
          <button
            className="circle"
            aria-label="Next"
            disabled={current === people.length - 1}
            onClick={() => setCurrent(current + 1)}
          >
            →
          </button>
        </div>

        <span />
        <p className="who">
          {person.name}
          <br />
          {person.role}
        </p>
      </div>
    </section>
  )
}
