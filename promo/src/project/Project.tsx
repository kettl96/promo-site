import s from './Project.module.css'
import Card from './card/Card';
import rslang from '../assets/projects/rslang.png'




const Project = () => {
  const cardData = [
    {
      id: 1,
      name: 'RS Lang',
      img: rslang,
      text: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 
      Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      link: 'https://rslang-vanya1000.netlify.app/',
      technology: 'React, Redux Toolkit, TS, MUI',
      github: 'https://github.com/Vanya1000/rslang'
    },
    {
      id: 2,
      name: 'store',
      img: rslang,
      text: `A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. 
      Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.`,
      link: 'https://rslang-vanya1000.netlify.app/',
      technology: 'React, Redux Toolkit, TS, MUI',
      github: 'https://github.com/Vanya1000/rslang'
    }
  ]

  return (
    <div className={s.wrapper}>
      <div className={s.titleWrapper}>
        <div className={s.title}>SOME OF MY LATEST PROJECT</div>
        <div className={s.titleLine}></div>
      </div>
      <div className={s.projectsWrapper}>
        {cardData.map(el => {
          return (
            <Card
              key={el.id}
              num={el.id}
              name={el.name}
              img={el.img}
              text={el.text}
              link={el.link}
              tech={el.technology}
              git={el.github} />
          )
        })}
      </div>
    </div>
  )
}

export default Project