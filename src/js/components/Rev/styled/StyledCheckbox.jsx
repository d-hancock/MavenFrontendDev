import styled from "styled-components";
import Icon from "./Icon.jsx"

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 42px;
  height: 42px;
  background: ${props => (props.checked ? '#479df9' : 'white')};
  border-radius: 50%;
  transition: all 200ms;
  position: relative;
  top: 50%;
  left: 50%;
  margin: -21px 0px 0px -21px;



  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`;

export default StyledCheckbox;