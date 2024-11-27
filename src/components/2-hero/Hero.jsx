import './hero.css'
export default function Hero() {
  return (
    <section className='hero flex'>
      <div className='left-section '>
        <div className="parent-avater flex">
          <img className="avater" src="/public/ziad.png" alt="" />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title'>
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className='sub-title'>
          I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
        </p> 
        <div className="all-icons flex">
          <div className="icon icon-x"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>
      <div className='right-section animation border'>
        animation
      </div>
    </section>
  )
}
