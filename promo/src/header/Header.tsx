import s from './Header.module.css'
import githubImg from '../assets/github.png'
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
        <a href="ghgh" className={s.link}>Resume</a>
      </div>
      <div className={s.socialLinks}>
        <div>
          <img src={githubImg} alt="" />
        </div>
        <div>2</div>
        <div>2</div>
      </div>
    </header>
  )
}

export default Header