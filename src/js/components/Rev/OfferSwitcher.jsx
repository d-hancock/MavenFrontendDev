import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import OfferContainer from "./OfferContainer.jsx";
import { RightArrow, LeftArrow } from "./styled/Arrow.jsx";


class OfferSwitcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTrimIndex: 0
        };

        this.nextOffer = this.nextOffer.bind(this);
        this.previousOffer = this.previousOffer.bind(this);
    }

    previousOffer() {
        const lastIndex = this.props.data.trim.length - 1;
        const {currentTrimIndex} = this.state;
        const shouldResetIndex = currentTrimIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentTrimIndex - 1;

        this.setState({
            currentTrimIndex: index
        });
    }

    nextOffer() {
        const lastIndex = this.props.data.trim.length - 1;
        const {currentTrimIndex} = this.state;
        const shouldResetIndex = currentTrimIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentTrimIndex + 1;

        this.setState({
            currentTrimIndex: index
        });
    }


    render() {
        if (this.props.currentStep !== 1) {
            return null
        } else {
            return (
                <React.Fragment>

                    <h2>PICK YOUR<br/>{this.props.data.vehicle} OFFER</h2>
                    <div className="row">

                        <LeftArrow direction="left"
                                          clickFunction={this.previousOffer}
                                          glyph="&#9664;"
                        />

                        <OfferContainer index={this.state.currentTrimIndex}
                                        trim={this.props.data.trim}
                                        handleCheckChange={this.props.handleCheckChange}
                                        checked={this.props.checked}
                        />


                        <RightArrow direction="right"
                                          clickFunction={this.nextOffer}
                                          glyph="&#9654;"
                        />

                    </div>
                </React.Fragment>
            );
        }
    }
}

export default OfferSwitcher;