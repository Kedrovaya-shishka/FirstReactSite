import { useState } from 'react'
import './Join.scss'

export default function Join() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email.includes('@')) setSent(true)
  }

  return (
    <section className="join wrap">
      <h2>Join the Movement</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setSent(false)
          }}
        />
        <button aria-label="Submit">→</button>
      </form>
      <p>
        {sent
          ? 'Thanks, you’re on the list.'
          : 'Stay up to date with the latest news from the coalition.'}
      </p>
    </section>
  )
}
