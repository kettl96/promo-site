import s from './Main.module.css'
import mainImg from '../assets/photo.png'
import githubImg from '../assets/github.png'
import Technology from './technology stack/Technology'


const Main = () => {
  return (
    <div>
      <img src={mainImg} alt="" className={s.mainImg} />
      <Technology />
    </div>
  )
}

export default Main



