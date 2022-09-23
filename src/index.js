import 'bootstrap/dist/css/bootstrap.css'
import ReactDOM from 'react-dom'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import logo from './images/logo.jpg'

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
            <div className='container mt-2'>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card bg-dark">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-2"style={{height: '6rem'}}>
                                    <img className='img-fluid rounded align-items-center mb-2"' style={{height: '6rem', margin: 'auto'}} 
                                        src={logo} alt="Logo Mega Sena" />
                                </div>
                                <div className='list-group'>
                                    <div className="list-group-item mt-2 mb-2 text-center text-success d-flex justify-content-between align-items-center">
                                        <ul style={{margin: 'auto', fontWeight: 'bold', fontSize:26}}>{this.state.jogo[0]}</ul>
                                        <ul style={{margin: 'auto', fontWeight: 'bold', fontSize:26}}>{this.state.jogo[1]}</ul>
                                        <ul style={{margin: 'auto', fontWeight: 'bold', fontSize:26}}>{this.state.jogo[2]}</ul>
                                        <ul style={{margin: 'auto', fontWeight: 'bold', fontSize:26}}>{this.state.jogo[3]}</ul>
                                        <ul style={{margin: 'auto', fontWeight: 'bold', fontSize:26}}>{this.state.jogo[4]}</ul>
                                        <ul style={{margin: 'auto', fontWeight: 'bold', fontSize:26}}>{this.state.jogo[5]}</ul>
                                    </div>
                                </div>
                                <button onClick={this.obterJogo} className="btn btn-outline-success w-100 mt-2"
                                    style={{fontWeight: 'bold', fontSize:22}}>
                                    Fazer Jogo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)