import { useState } from 'react'
import './Believe.scss'

const items = [
  'Protect Wildlife',
  'Preserve the Environment',
  'Grow Tourism Responsibly',
  'Reduce Emissions',
]

export default function Believe() {
  const [active, setActive] = useState(0)

  return (
    <section className="believe wrap">
      <div>
        <p className="lead">We believe that now is the time to:</p>
        <ol>
          {items.map((text, i) => (
            <li key={text} className={i === active ? 'on' : ''}>
              <button onClick={() => setActive(i)}>
                <span>{i + 1}</span>
                {text}
              </button>
            </li>
          ))}
        </ol>
      </div>
      <p className="foot">
        We want to ensure that people can experience all the awe-inspiring
        wildlife our planet has to offer, but we believe that our presence as
        travellers should always be a force for good – conserving habitats,
        preserving natural resources and protecting species.
      </p>
    </section>
  )
}
