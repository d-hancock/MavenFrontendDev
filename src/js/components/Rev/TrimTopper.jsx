import React from 'react';
import styled from "styled-components";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {RightArrow, LeftArrow, ArrowContainer} from "./styled/Arrow.jsx";
import PhoneButton from "./styled/button/PhoneButton.jsx";
import phone from "../../../icons/phone.png";
import arrow_right from "../../../icons/arrow_right.png";
import arrow_left from "../../../icons/arrow_left.png";

function TrimTopper(props) {
    return (

        <BgContainer bgimg={props.bgimg}>
            <ArrowContainer>
                <LeftArrow direction="left"
                           clickFunction={props.prev}
                           src={arrow_left}/>
                <RightArrow direction="right"
                            clickFunction={props.next}
                            src={arrow_right}
                />
            </ArrowContainer>
            <PickOfferContainer>
                <PickOfferText>
                    PICK YOUR
                </PickOfferText>
                <TrimH1>
                    {props.vehicle} OFFER
                </TrimH1>
            </PickOfferContainer>
            <PhoneButton phoneicon={phone}
                         phonelink={props.phonelink}

            />
            <TrimImageContainer>
                <Image src={props.trim[props.index].imgurl} fluid/>
            </TrimImageContainer>
            <TrimDetailsContainer>
                <TrimTopDetails>
                    {props.trim[props.index].name}
                </TrimTopDetails>
                <TrimTopMsrpDetails>
                    MSRP: {props.trim[props.index].msrp}
                </TrimTopMsrpDetails>
                <TrimInfoModal>

                </TrimInfoModal>
            </TrimDetailsContainer>
        </BgContainer>

    );
}

const TopperContainer = styled.div`
`;

const BgContainer = styled.div`
background-image: ${props => `url(${props.bgimg})`};
margin-bottom: 15px;
background-size: cover;
width: 100%;
`;


const TrimTopDetails = styled.h3`
font-weight: bold;
font-size: 15px;
`;

const TrimTopMsrpDetails = styled.h3`
font-size: 12px;
 font-family: "Ford Antenna";

`;

const TrimInfoModal = styled.div`
  font-family: "Ford Antenna";

`;

const PickOfferContainer = styled.div`
margin-top: 6%;
margin-left: 6%;
display: inline-block;
`;


const PickOfferText = styled.h1`
  font-family: "Ford Antenna";
  color: #FFF;
  font-size: 18px;
  font-weight: 300;

`;

const TrimH1 = styled.h1`
font-family: "Ford Antenna";
color: #FFF;
font-size: 27px;
font-weight: 700;
`;

const TrimDetailsContainer = styled.div`
position: absolute;
top: 25%;
text-align: right;
right: 4%;
margin-right: 10px;
color: #ffffff;
`;

const TrimImageContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
width: 100%;
bottom: -8%;
pointer-events:none;
`;

const TrimTopContainer = styled.div`

`;

export default TrimTopper;