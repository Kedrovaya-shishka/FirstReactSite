// Страница = набор компонентов-секций, выстроенных друг под другом
import Hero from './components/Hero/Hero'
import Partners from './components/Partners/Partners'
import Quotes from './components/Quotes/Quotes'
import Frameworks from './components/Frameworks/Frameworks'
import Transparency from './components/Transparency/Transparency'
import Stats from './components/Stats/Stats'
import Believe from './components/Believe/Believe'
import Partner from './components/Partner/Partner'
import Join from './components/Join/Join'

export default function App() {
  return (
    <>
      <Hero />
      <Partners />
      <Quotes />
      <Frameworks />
      <Transparency />
      <Stats />
      <Believe />
      <Partner />
      <Join />
    </>
  )
}
