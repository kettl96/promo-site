import s from './Other.module.css'

type OtherPropsType = {
  opened: boolean
  close: () => void
}

const Other: React.FC<OtherPropsType> = ({ opened, close }) => {
  return (
    <div className={`${s.allProject} ${opened ? s.visible : ''}`}>
      <div className={s.viewBtn__wrapper}>
        <button onClick={close}><span>View other</span><i></i></button>
      </div>
    </div>

  )
}

export default Other