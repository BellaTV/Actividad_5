import Button from './Button'
import iconMusic from '../assets/images/icon-music.svg'

import './plan.scss'

const PlanComponent = () => {
  return (
    <div className='plan'>
        <img src={iconMusic} alt="" />
        <div className='plantext'>
            <span >Annual Plan</span>
            <span >$59.99/year </span>                   
        </div>
        <Button classname='change' text='Change'/>
    </div>
  )
}


export default PlanComponent

