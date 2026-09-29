import { useState } from 'react'
import star from '../../assets/Bash.png'
import balloon from '../../assets/Voz.png'
import './Stats.scss'


const stats = [
  {
    big: '71',
    unit: '%',
    text: 'of travellers want to make more effort in the next year to travel more sustainably, up 10% from 2021',
    source: 'Booking.com',
  },
  {
    big: '68',
    unit: 'mn',
    text: 'have selected lower emissions flights on Skyscanner since 2019',
    source: 'Skyscanner',
  },
  {
    big: '7',
    unit: 'in 10',
    text: 'feel overwhelmed by starting the process of being a more sustainable traveller',
    source: 'Expedia',
  },
]

export default function Stats() {
  const [open, setOpen] = useState(null)

  return (
    <section className="panel stats wrap">
      <h2>Travellers want to travel more sustainably:</h2>
      <ul>
        {stats.map((s, i) => (
          <li key={i}>
            <span className="num">
              <span className="big">{s.big}</span>{' '}
              <span className="unit">{s.unit}</span>
            </span>
            <p>{s.text}</p>
            <button
              className="circle"
              aria-label="Show source"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <img src={star} alt="" />
            </button>
            {open === i && <span className="source">{s.source}</span>}
          </li>
        ))}
      </ul>
      <p className="note">
        It’s not always easy for travellers to know whether they are making good
        choices from a sustainability perspective, even when they want to. This
        is why we are bringing the industry together to help make it clearer to
        consumers what to look for.
      </p>
      <img className="balloon" src={balloon} alt="" />
    </section>
  )
}
