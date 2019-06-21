import styled from "styled-components";
import React from "react";
import render from "react";


const SelectArrow = ({ direction, clickFunction, src, className }) => (
	<div
		className={ className }
		onClick={ clickFunction }>
		<img src={src}/>
	</div>
);


const StyledArrow = styled(SelectArrow)`
	cursor: pointer;
	font-size: 2rem;
	display: inline;
`;


const RightArrow = styled(StyledArrow)`
;
position: relative;
`;


const LeftArrow = styled(StyledArrow)`
position: relative;
`;

const ArrowContainer = styled.div`
position: absolute;
top: 40%;
transform: translateY(-50%);
display: flex;
justify-content: space-between;
width: 100%;
z-index: 1;
`;

export {
    SelectArrow,
    StyledArrow,
    RightArrow,
    LeftArrow,
    ArrowContainer,
}