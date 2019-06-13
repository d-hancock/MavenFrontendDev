import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FinanceOfferItem from "./FinanceOfferItem.jsx";
import SavingsOfferItem from "./SavingsOfferItem.jsx";
import LeaseOfferItem from "./LeaseOfferItem.jsx";

function OfferContainer(props) {
    return (
        <Container>
            <Row>
                <React.Fragment>
                    <Col xs={12}>
                        <Image src={props.trim[props.index].imgurl} fluid/>
                    </Col>
                    <Col xs={12}>
                        <SavingsOfferItem trim={props.trim}
                                          index={props.index}
                                          handleCheckChange={props.handleCheckChange}
                                          checked={props.checked}
                        />
                    </Col>
                    <Col xs={12}>
                        <FinanceOfferItem trim={props.trim}
                                          index={props.index}
                                          handleCheckChange={props.handleCheckChange}
                                          checked={props.checked}
                        />
                    </Col>
                    <Col xs={12}>

                        <LeaseOfferItem trim={props.trim}
                                        index={props.index}
                                        handleCheckChange={props.handleCheckChange}
                                        checked={props.checked}
                        />
                    </Col>
                </React.Fragment>
            </Row>
        </Container>
    )
}

export default OfferContainer;