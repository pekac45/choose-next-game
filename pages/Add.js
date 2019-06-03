/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { React, Component } from 'react';
import { Cell } from 'styled-css-grid';

import Layout from '../components/Layout';
import { Button, InputWrapper } from '../styles/components';

class Add extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.addGame;
    console.log(form.name.value);
    form.name.value = '';
    console.log(e);
  }

  render() {
    return (
      <Layout>
        <Cell left={5} width={4} center>
          <h2>This is the Add page.</h2>
        </Cell>
        <Cell left={4} width={6} center top={3}>
          <form name="addGame" onSubmit={this.handleSubmit}>
            <InputWrapper type="text" name="name" placeholder="Name" />
            <Button className="btn">Add Game</Button>
          </form>
        </Cell>
      </Layout>
    );
  }
}

export default Add;
