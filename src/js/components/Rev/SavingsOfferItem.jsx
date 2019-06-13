import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import OfferHeading from './styled/OfferHeading.jsx';
import OfferValue from './styled/OfferValue.jsx';
import OfferDetail from './styled/OfferDetail';
import OfferItem from './styled/OfferItem.jsx';
import Checkbox from "./Checkbox.jsx";

function SavingsOfferItem(props) {
    if (props.trim[props.index].offers.savings == null) {
        return null;
    }
    const nameKey = props.trim[props.index].name + ' savings';
    return (
        <Row>
            <OfferItem>
                <Col xs={2}>
                    <Checkbox
                        onChange={props.handleCheckChange}
                        checked={props.checked.get((nameKey))}
                        name={props.trim[props.index].name + ' savings'}
                    />
                </Col>
                <Col xs={3}>
                    <OfferHeading>
                        Savings
                    </OfferHeading>
                </Col>
                <Col xs={6}>
                    <OfferDetail>
                        Up To
                    </OfferDetail>
                    <OfferValue>
                        <sup>$</sup>{props.trim[props.index].offers.savings}
                    </OfferValue>
                    <OfferDetail>
                        Total Savings
                    </OfferDetail>
                </Col>
            </OfferItem>
        </Row>
    )
}

export default SavingsOfferItem;