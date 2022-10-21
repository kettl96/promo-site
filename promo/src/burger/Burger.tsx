import s from './Burger.module.css'
import { useState, useEffect } from 'react';
import Social from './../header/Social';

const Burger = () => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    const resize = () => {
      if (document.documentElement.clientWidth > 740) setOpen(false)
    }
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  const openBurger = () => setOpen(!isOpen)

  return (
    <div>
      <div className={isOpen ? `${s.open} ${s.icon}` : s.icon} onClick={openBurger}>
        <span></span>
      </div>
      {isOpen &&
        <div className={s.wrapper}>
          <div className={s.allLinks}>
            <div className={s.up}>
              <div className={s.title}>Links</div>
              <div className={s.links}>
                <a href="#about" className={s.link}>About</a>
                <a href="#portfolio" className={s.link}>Portfolio</a>
                <a href="/resume.pdf" target='_blank' rel='noopener noreferrer' className={s.link}>Resume</a>
              </div>
            </div>
            <div className={s.down}>
              <div className={s.title}>Get in touch</div>
              <Social header={false} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Burger

