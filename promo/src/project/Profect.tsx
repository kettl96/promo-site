import React from 'react';
import s from './Project.module.css'

import codeImgBack2 from '../assets/backcode2.png'


const Project = () => {
  React.useEffect(() => {
    // console.log(window.innerWidth / 2);

  }, [])

  // const moveImg = (e: any) => () => {
  //   console.log(e.pageX);

  // }
  const moveImg = (e: any) => {
    console.log(e.pageX);

  }
  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>

        <div className={s.title}>SOME OF MY LATEST PROJECT</div>
        <div className={s.titleLine}></div>
      </div>
      <div className={s.projectCard}>
        <img src={codeImgBack2} alt="" onMouseMove={(event)=>moveImg(event)} />
      </div>
    </div>
  )
}

export default Project