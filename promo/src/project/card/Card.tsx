import React, { LegacyRef, MouseEvent, useRef } from 'react';
import s from './Card.module.css'
import { gsap } from "gsap";
import gitImg from '../../assets/github.png'
import linkImg from '../../assets/exlink.png'

type CardPropsType = {
  num: number
  name: string
  img: string
  text: string
  link: string
  tech: string
  git: string
}

const Card: React.FC<CardPropsType> = ({ num, name, img, text, link, tech, git }) => {
  const [x, setX] = React.useState(Number)
  const [y, setY] = React.useState(Number)

  React.useEffect(() => {
    if (x === 0) {
      const anim1 = gsap.to(boxRef?.current, { transform: `rotate3d(${0}, ${0}, 0, ${0}deg)` });
      return () => {
        anim1.kill()
      }
    }
    let cx = window.innerWidth / 2
    let cy = window.innerWidth / 2

    let dx = x - cx
    let dy = y - cy

    let tiltX = dy / cy
    let tiltY = dx / cx

    let radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY, 2))
    let degree = radius * 18

    const anim1 = gsap.to(boxRef?.current, { transform: `rotate3d(${tiltX}, ${tiltY}, 0, ${degree}deg)` });
    return () => {
      anim1.kill()
    }
  }, [x, y])

  // const boxRef = useRef() as LegacyRef<HTMLDivElement> | undefined;
  const boxRef = useRef() as any;
  const moveImg = (e: MouseEvent<HTMLDivElement>): void => {
    setX(e.pageX);
    setY(e.pageY);
  }
  const stopImg = () => {
    setX(0)
    setY(0)
  }
  console.log(num);

  return (
    <div className={`${num === 4}` ? s.projectCardTrue : s.projectCardReverse }  >
      <div ref={boxRef} onMouseMove={moveImg} onMouseOut={stopImg} >
        <a href={link} target='_blank' rel="noreferrer">
          <img src={img} className={s.imgProject} alt="project" />
        </a>
      </div>
      <div className={s.description} >
        <div className={s.name}>{name}</div>
        <div className={s.text}>{text}</div>
        <div className={s.tech}>{tech}</div>
        <div className={s.linksImg}>
          <a href={git}>
            <div><img src={gitImg} alt="" /></div>
          </a>
          <a href={link}>
            <div><img src={linkImg} alt="" id={s.link} /></div>
          </a>
        </div>

      </div>
    </div >
  )
}

export default Card