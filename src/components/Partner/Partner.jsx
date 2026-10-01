import './Partner.scss'

export default function Partner() {
  return (
    <section className="partner" id="partner">
      <div className="head">
        <h2>Become a Partner</h2>
        <p>
          Travalyst partners are part of a global network of change-makers,
          independent experts and academics – all working together to create
          viable, visible sustainability solutions. Fundamentals of our
          partnership include:
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <span className="n">1</span>
          <div>
            <h3>Collaboration</h3>
            <p>
              Creating game-changing impact through collaboration, sharing ideas
              and information in a supportive, pre-competitive structure.
            </p>
          </div>
        </div>
        <div className="card">
          <span className="n">2</span>
          <div>
            <h3>Scale</h3>
            <p>
              Travalyst’s connections and access to world-renowned
              sustainability specialists and academics enable us to scale
              initiatives at speed.
            </p>
          </div>
        </div>
        <div className="card">
          <span className="n">3</span>
          <div>
            <h3>Networking</h3>
            <p>
              Being part of a group of energising collaborators with a shared
              focus on changing the industry for the better.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <button className="more">Learn More</button>
        <div className="arrows">
          <button className="circle">←</button>
          <button className="circle">→</button>
        </div>
      </div>
    </section>
  )
}
