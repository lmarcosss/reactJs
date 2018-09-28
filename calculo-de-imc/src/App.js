import React, { Component } from 'react';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      imc: 'Digite para saber mais',
      categoria: ''
    }
    this.calculoIMC = this.calculoIMC.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let change = this.state;
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  calculoIMC() {
    const calculo = parseFloat((this.state.peso / (this.state.altura * this.state.altura)).toFixed(2));
    console.log(calculo);
    this.setState({
      imc: calculo,
      peso: '',
      altura: ''
    });
    this.categoriaIMC(calculo);
  }

  categoriaIMC(imc) {
    let texto = '';
    if (imc < 16.0) {
      texto = 'Magreza grave';
    } else if (imc < 17) {
      texto = 'Magreza leve';
    } else if (imc < 18.5) {
      texto = 'Magreza moderada';
    } else if (imc < 25) {
      texto = 'Saudável';
    } else if (imc < 30) {
      texto = 'Sobrepeso';
    } else if (imc < 35) {
      texto = 'Obesidade Grau I';
    } else if (imc < 40) {
      texto = 'Obesidade Grau II (severa)';
    } else if (imc < 40) {
      texto = 'Obesidade Grau III (morbida)';
    }
    this.setState({ categoria: texto });
  }

  render() {
    return (
      <div className="App">
        <div className="celular">
          <div className="tela">
            <div className="form">
              <input type="number" className="input peso" placeholder="Peso" name="peso" value={this.state.peso} onChange={this.handleChange} />
              <input type="number" className="input altura" placeholder="Altura" name="altura" value={this.state.altura} onChange={this.handleChange} />
            </div>
            <div onClick={this.calculoIMC} className="botao">Calcular</div>
            <div className="imc">
              {isNaN(this.state.imc) ? 'Digite para saber mais' : this.state.imc}
            </div>
            <div>
              {this.state.categoria}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
