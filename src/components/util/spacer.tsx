import { VFC } from 'react'
import spacer from "styles/spacer.module.scss";

interface Props {
  margin : number
}

const Spacer: VFC<Props> = (props) => {

  const margin = () => {
    switch (props.margin) {
      case 10:
        return <div className={spacer.margin10}></div>
      case 20:
        return <div className={spacer.margin20}></div>
      case 30:
        return <div className={spacer.margin30}></div>
      case 40:
        return <div className={spacer.margin40}></div>
      case 50:
        return <div className={spacer.margin50}></div>
      case 60:
        return <div className={spacer.margin60}></div>
      default:
        return <div className={spacer.margin10}></div>
    }
  }

  return (
    <>
      {
        margin()
      }
    </>
  )
}

export default Spacer;
