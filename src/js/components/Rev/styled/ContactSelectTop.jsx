import React from 'react';
import AlmostDoneText from './text/AlmostDoneText.jsx';
import GetOffersText from './text/GetOffersText.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ContactSelectTop(props) {
    return (

        <React.Fragment>
            <Row>
                <Col xs={9}>
                <Col xs={12}>
                    <AlmostDoneText>
                        You're almost done!
                    </AlmostDoneText>
                </Col>
                <Col xs={12}>
                    <GetOffersText>
                        GET OFFERS
                    </GetOffersText>
                </Col>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default ContactSelectTop;