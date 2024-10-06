import PropTypes from 'prop-types'

const Button = ({text, classname})=> {
  return (


    <button className={`${classname}`}>{text}</button>
  )
}

Button.propTypes = {
text: PropTypes.string.isRequired,
classname: PropTypes.string.isRequired,
}

export default Button;
