import styled from "styled-components";
import React from "react";
import render from "react";


const SelectArrow = ({ direction, clickFunction, glyph, className }) => (
	<div
		className={ className }
		onClick={ clickFunction }>
		{ glyph }
	</div>
);


const StyledArrow = styled(SelectArrow)`
	cursor: pointer;
	font-size: 2rem;
	position: relative;
	top: 50%;
`;


const RightArrow = styled(StyledArrow)`
right: 1rem;
`;


const LeftArrow = styled(StyledArrow)`
left: 1rem;
`;

export {
    SelectArrow,
    StyledArrow,
    RightArrow,
    LeftArrow
}