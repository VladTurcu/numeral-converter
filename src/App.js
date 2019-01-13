import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './util/Header';
import NavBar from './util/NavBar';
import Form from './util/Form';
import OutputDisplay from './util/OutputDisplay';

class App extends Component {
  constructor() {
    super();

    this.state = {
      activeInput: 'number',
      numeral: null
    }

    this.AppContainer = this.AppContainer();
  }

  AppContainer() {
    return styled.div`
      max-width: 500px;
      margin: 0 auto;
    `;
  }

  changeActiveInput = ({ target }) => {
    const { id } = target;
    this.setState({ activeInput: id });
  }

  updateNumeral = (numeral) => {
    this.setState({ numeral });
  }

  render() {
    const { AppContainer } = this;

    return (
      <AppContainer>
        <Header>
          Numeral Converter
        </Header>
        <NavBar
          active={this.state.activeInput}
          changeActiveInput={this.changeActiveInput}
          options={[
            'number',
            'numeral'
          ]}
        />
        <OutputDisplay>
          {this.state.numeral && this.state.numeral}
        </OutputDisplay>
        <Form
          activeInput={this.state.activeInput}
          updateNumeral={this.updateNumeral}
        />
      </AppContainer>
    );
  }
}

export default App;
