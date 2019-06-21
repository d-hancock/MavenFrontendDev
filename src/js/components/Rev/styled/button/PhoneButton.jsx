import React from 'react';
import styled from 'styled-components';

const PhoneButton = props => (
    <PhoneButtonCircle>
        <a href={props.phonelink}>
            <PhoneIcon src={props.phoneicon}/>
        </a>
    </PhoneButtonCircle>
);

const PhoneButtonCircle = styled.div`
border-radius: 50%;
color: #ffffff;
box-shadow: 0 2px 24px 0 rgba(0,0,0,0.7);
width: 62px;
height: 62px;
text-align: center;
position: sticky;
top: 5%;
margin-left: 25%;
z-index: 15;
display: inline;
`;

const PhoneIcon = styled.img`
position: relative;
top: 50%;
transform: translateY(-50%)
`;

export default PhoneButton;