import s from './Other.module.css'

type OtherPropsType = {
  opened: boolean
  close: () => void
}

const Other: React.FC<OtherPropsType> = ({ opened, close }) => {
  return (
    <div className={`${s.allProject} ${opened ? s.visible : ''}`}>
      <div className={s.cardsWrapper}>
        <div>
          <div>image</div>
          <div>name</div>
          <div>opisanie</div>
        </div>
      </div>
      <div className={s.viewBtn__wrapper}>
        <button onClick={close}><span>Hide</span><i></i></button>
      </div>
    </div>

  )
}

export default Other