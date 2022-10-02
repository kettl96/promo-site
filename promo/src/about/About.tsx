import React from 'react';
import s from './About.module.css'
import me1 from '../assets/me/me1.jpg'
import me2 from '../assets/me/me2.jpg'
import me3 from '../assets/me/me3.jpg'

const About = () => {
  const [count, setCount] = React.useState(0)
  const [distanceLeft, setDistanceLeft] = React.useState(-350)
  const [distanceRight, setDistanceRight] = React.useState(-350)
  React.useEffect(() => {
    const interval = setInterval(() => {
      switch (count) {
        case 0:
          setDistanceLeft(0)
          setCount(count + 1)
          break
        case 1:
          setDistanceRight(-700)
          setCount(count + 1)
          break
        case 2:
          setDistanceRight(-350)
          setCount(count + 1)
          break
        case 3:
          setDistanceLeft(-350)
          setCount(0)
          break
      }
    }, 10000)
    return () => clearInterval(interval)
  })
  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <div className={s.title}>About me</div>
        <div className={s.titleLine}></div>
      </div>
      <div className={s.aboutWrapper}>
        <div className={s.imgWrapper}>
          <img src={me2} alt="" className={`${s.img2} `} style={{ transform: `translateX(${distanceLeft}px)` }} />
          <img src={me1} alt="" className={`${s.img1}`} />
          <img src={me3} alt="" className={`${s.img3} `} style={{ transform: `translateX(${distanceRight}px)` }} />
        </div>
        <div className={s.infoWrapper}>
          <div>
            Hello! My name is Brittany and I enjoy creating things that live on the internet.
            My interest in web development started back in 2012 when I decided to try editing custom
            Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </div>
        </div>
      </div>
    </div>
  )
}
export default About