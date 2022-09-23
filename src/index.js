import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import logo from './images/logo.jpg'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        jogo: [0,0,0,0,0,0]
        }
    }

    obterJogo = () => {
        const i = [] //auxiliar para contador
        while (i.length < 6){ //enquanto i menor do que 6 (na lista) ficará gerando números.
            const numero = Math.round(Math.random() * 60) + 1; //Será gerado números aleatórios cujo o maior será 60.
            if (!i.includes(numero))i.push(numero)  // só entrará no if se o i retornar false.
        }
        this.setState({jogo: i})
    }

    render(){
        return (
            <Container className="mt-2">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="bg-dark">
                            <Card.Body>
                                <div className="d-flex justify-content-center align-items-center mb-2"style={{height: '6rem'}}>
                                    <img className='img-fluid rounded align-items-center mb-2"' style={{height: '4rem', margin: 'auto'}} 
                                        src={logo} alt="Logo Mega Sena" />
                                </div>
                                <ListGroup horizontal className="d-flex justify-content-center align-items-center mb-2">
                                <ListGroup.Item className="d-flex mt-2 mb-2 text-success justify-content-center align-items-center w-50 mb-2">
                                        {this.state.jogo[0]}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex mt-2 mb-2 text-success justify-content-center align-items-center w-50 mb-2">
                                        {this.state.jogo[1]}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex mt-2 mb-2 text-success justify-content-center align-items-center w-50 mb-2">
                                        {this.state.jogo[2]}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex mt-2 mb-2 text-success justify-content-center align-items-center w-50 mb-2">
                                        {this.state.jogo[3]}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex mt-2 mb-2 text-success justify-content-center align-items-center w-50 mb-2">
                                        {this.state.jogo[4]}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex mt-2 mb-2 text-success justify-content-center align-items-center w-50 mb-2">
                                        {this.state.jogo[5]}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Button variant="outline-success" className="text-white d-flex justify-content-center align-items-center w-100"
                                    style={{fontWeight: 'bold', fontSize:20}} onClick={this.obterJogo} >
                                    Fazer Jogo
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)