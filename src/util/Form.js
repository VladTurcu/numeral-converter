import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }

    this.StyledForm = this.StyledForm();

  }

  StyledForm() {
    return styled.form`
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      input {
        border: 2px solid black;
        box-sizing: border-box;
        font-size: 2em;
        margin: 0;
        padding: 0;
        text-align: center;
        width: 75%;
      }
    `;
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({ value: value.toUpperCase() });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios.get(`http://localhost:4000/api/${this.props.activeInput}?q=${this.state.value}`)
      .then((res) => this.props.updateNumeral(res.data.numeral || res.data.number))
      .catch(console.log);
  }

  render() {
    const { StyledForm } = this;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="q"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <input
          disabled={!this.state.value}
          type="submit"
        />
      </StyledForm>
    )
  }
}

export default Form;