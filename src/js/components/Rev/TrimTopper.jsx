import React from 'react';
import styled from "styled-components";
import Image from 'react-bootstrap/Image';


function TrimTopper(props) {
    return (
        <TopperConainer>
            <BgContainer>
                <PickOfferText>

                </PickOfferText>
                <TrimH1>

                </TrimH1>
                <PhoneButton/>
                <Image/>
                <TrimTopDetails>

                </TrimTopDetails>
                <TrimTopMsrpDetails>

                </TrimTopMsrpDetails>
                <TrimInfoModal>

                </TrimInfoModal>
            </BgContainer>
        </TopperConainer>
    );
}

const BgContainer = styled.div`
background-image: "url(${props => props.data.client.bgimg})";
margin-bottom: 15px;
background-size: cover;
position: absolute;
`;

const TopperContainer = styled.div`
position: relative;
`;

const TrimTopDetials = styled.h3`
text-align: left;
font-weight: bold;
`;

const TrimTopMsrpDetials = styled.h3`
text-align: left;
`;

const TrimInfoModal = styled.div`

`;

const PhoneButton = styled.button`
border-radius: 50%;
box-shadow: 2px;
`;

const PickOfferText =  styled.h1`

`;

const TrimH1 = styled.h1`
font-weight: bold;
`;


export default TrimTopper;