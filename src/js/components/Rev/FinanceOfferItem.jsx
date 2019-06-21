import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import OfferHeading from './styled/OfferHeading.jsx';
import OfferValue from './styled/OfferValue.jsx';
import OfferDetail from './styled/OfferDetail';
import Checkbox from "./Checkbox.jsx";
import OfferItem from './styled/OfferItem.jsx';

function FinanceOfferItem(props) {
    if (props.trim[props.index].offers.finance == null) {
        return null;
    }
    const nameKey = props.trim[props.index].name + ' finance';
    return (
        <Row>
            <OfferItem>
                <Col xs={3}>
                    <Checkbox
                        onChange={props.handleCheckChange}
                        checked={props.checked.get((nameKey))}
                        name={props.trim[props.index].name + ' finance'}
                    />
                </Col>
                <Col xs={3}>
                    <OfferHeading>
                        Finance
                    </OfferHeading>
                </Col>
                <Col xs={6}>
                    <OfferValue>
                        <sup>$</sup>{props.trim[props.index].offers.finance}
                    </OfferValue>
                    <OfferDetail>
                        APR financing for up to 60 months PLUS $2000 Off
                    </OfferDetail>
                </Col>
            </OfferItem>
        </Row>
    )
}

export default FinanceOfferItem;