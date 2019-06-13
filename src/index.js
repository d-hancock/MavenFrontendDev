import React from 'react';
import ReactDOM from 'react-dom';
import RevMaster from './js/components/Rev/RevMaster.jsx';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import dummyData from './test_data/DummyData.js';

const data = dummyData

class App extends React.Component {
    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <RevMaster data={data}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('react-app'));