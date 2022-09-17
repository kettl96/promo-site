import s from './Header.module.css'
import githubImg from '../assets/github.png'
import linkedImg from '../assets/linkedin.png'
import mailImg from '../assets/mail.png'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <div className={s.logo}></div>
        <div className={s.logoText}>AN</div>
      </div>
      <div className={s.links}>
        <a href="ghgh" className={s.link}>About</a>
        <a href="ghgh" className={s.link}>Portfolio</a>
        <a href="/resume.pdf" target='_blank' rel='noopener noreferrer' className={s.link}>Resume</a>
      </div>
      <div className={s.socialLinks}>
        <a href="https://www.linkedin.com/in/alexander-nechaenkov-9b4b34229/" target='_blank' rel="noreferrer"><img src={linkedImg} alt="" /></a>
        <a href="https://github.com/kettl96" target='_blank' rel="noreferrer"><img src={githubImg} alt="" /></a>
        <a href="mailto:kettl110e4@gmail.com" target='_blank' rel="noreferrer"><img src={mailImg} alt="" /></a>
      </div>
    </header>
  )
}

export default Header