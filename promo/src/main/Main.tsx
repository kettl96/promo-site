import s from './Main.module.css'
import mainImg from '../assets/photo.png'
import codeImg from '../assets/code2.png'
import Technology from './technology stack/Technology'
import Intro from './intro/Intro'


const Main = () => {
  return (
    <div className={s.mainWrapper}>
      <div>
        <img src={mainImg} alt="" className={s.mainImg} />
        <img src={codeImg} alt="" className={s.codeImg} />
        <Technology />
      </div>
        <Intro />
    </div>
  )
}

export default Main



