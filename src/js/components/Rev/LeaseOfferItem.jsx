import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import OfferHeading from './styled/OfferHeading.jsx';
import OfferValue from './styled/OfferValue.jsx';
import OfferDetail from './styled/OfferDetail';
import OfferItem from './styled/OfferItem.jsx';
import Checkbox from "./Checkbox.jsx";

function LeaseOfferItem(props) {
    if (props.trim[props.index].offers.lease == null) {
        return null;
    }
    const nameKey = props.trim[props.index].name + ' lease';
    return (
        <Row>
            <OfferItem>
                <Col xs={2}>
                    <Checkbox
                        onChange={props.handleCheckChange}
                        checked={props.checked.get((nameKey))}
                        name={props.trim[props.index].name + ' lease'}
                    />
                </Col>
                <Col xs={3}>
                    <OfferHeading>
                        Lease
                    </OfferHeading>
                </Col>
                <Col xs={6}>
                    <OfferValue>
                        <sup>$</sup>{props.trim[props.index].offers.lease}
                    </OfferValue>
                    <OfferDetail>
                        per month for 36 months with $2199 due at signing
                    </OfferDetail>
                </Col>
            </OfferItem>
        </Row>
    )
}

export default LeaseOfferItem;