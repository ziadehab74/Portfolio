import './hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Hero() {
  return (
    <section id="hero" className='hero flex'>
      <div className='left-section '>
        <div className="parent-avater flex">
          <img className="avater" src="/ziad.png" alt="" />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title'>
          Hi, I’m Ziad 👋
        </h1>
        <h2 className='sub-title'>
          Full Stack Software Engineer
        </h2>
        <p className='content'>
          I build scalable web applications using React, Laravel, and modern tech.
          Passionate about performance, clean code, and user experience.
        </p>
        <div className="all-icons flex">
          <a href="https://x.com/..." target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://github.com/ziadehab74" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/ziad-ehab78" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className='right-section animation '>
        
      </div>
    </section>
  )
}
