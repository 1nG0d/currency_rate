import React, { Component } from 'react';
import CurrencySelect from './CurrencySelect'
import DataPicker from './DatePicker'
import QuantityInput from './QuantityInput'
import InfoGraphic from './Info'
import Counter from './Counter'
import Authentication from './Authentication'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Authentication />
        <Counter />
        <CurrencySelect />
        <DataPicker />
        <QuantityInput />
        <InfoGraphic />
      </div>
    );
  }
}

export default App;
