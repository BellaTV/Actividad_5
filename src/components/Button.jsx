import PropTypes from 'prop-types'
import styled from 'styled-components'

// Estilos generales para el boton
const GeneralStyleBtn = styled.button`
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    outline: inherit;
    margin: 10px 0;
    `;


const Button = ({text, classname})=> {
  return (

    <GeneralStyleBtn className={`${classname}`}>{text}</GeneralStyleBtn>
  );
};

Button.propTypes = {
text: PropTypes.string.isRequired,
classname: PropTypes.string.isRequired,
}

export default Button;
