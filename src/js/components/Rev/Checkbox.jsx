import React from 'react';
import CheckboxContainer from './styled/CheckboxContainer.jsx';
import HiddenCheckbox from './styled/HiddenCheckbox.jsx';
import Icon from './styled/Icon.jsx';
import StyledCheckbox from './styled/StyledCheckbox.jsx';
import CheckboxHollow from './styled/CheckboxHollow.jsx';


const Checkbox = ({className, checked = false, value, ...props}) => (
    <label>
        <CheckboxContainer className={className}>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                </Icon>
            </StyledCheckbox>
        </CheckboxContainer>
    </label>
);

export default Checkbox;
