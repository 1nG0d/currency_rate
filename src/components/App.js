import React, { Component } from 'react';
import CurrencySelect from './CurrencySelect'
import DataPicker from './DatePicker'
import QuantityInput from './QuantityInput'
import InfoGraphic from './Info'


class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencySelect />
        <DataPicker />
        <QuantityInput />
        <InfoGraphic />
      </div>
    );
  }
}

export default App;
