import React from 'react';
import s from './Work.module.css'
import arrow from '../../assets/arrow.png'

const Work = () => {
  const [display, setDisplay] = React.useState('Education')

  const click = (e: any) => {
    const element = e.currentTarget as HTMLDivElement
    const button = e.target as HTMLButtonElement
    element.childNodes.forEach((el: any) => el.classList.remove('active'))
    button.classList.add('active')
    setDisplay(button.innerHTML)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.buttons} onClick={click}>
        <button className='active'>Education</button>
        <button>Freelance</button>
        <button>Exosoft</button>
      </div>
      {display === 'Education' &&
        <div className={s.contentWrapper}>
          <div className={s.education}>
            <div className={s.edu__card}>
              <div className={s.title}>The Rolling Scopes School</div>
              <div className={s.subtitle}>JavaScript Development</div>
              <div>
                Semi-annual JavaScript course hosted by The Rolling Scopes School community.
                Pre-School course.
              </div>
              <a href="https://app.rs.school/certificate/vfkrqqme">
                To certificate
                <img src={arrow} alt="" />
              </a>
            </div>
            <div className={s.edu__card}>
              <div className={s.title}>The Rolling Scopes School</div>
              <div className={s.subtitle}>JavaScript Development</div>
              <div>
                Semi-annual JavaScript course hosted by The Rolling Scopes School community.
                Main course.
              </div>
              <a href="https://app.rs.school/certificate/ixus1o9z">
                To certificate
                <img src={arrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      }
      {display === 'Freelance' &&
        <div className={s.contentWrapper}>
          <div className={s.freelance}>
            <div>Started in 2021 (6mos.)</div>
            <div>
              Development of small commercial solutions,
              their administration and Customer Relationship Management systems setting up;<React.Fragment><br /></React.Fragment>
              Web marketing and websites optimization;<React.Fragment><br /></React.Fragment>
              Development of own web applications using modern technologies.
            </div>
          </div>
        </div>
      }
      {display === 'Exosoft' &&
        <div className={s.contentWrapper}>
          exo
        </div>
      }
    </div>
  )
}
export default Work