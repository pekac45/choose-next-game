import React, { Component } from 'react';
import { Cell } from 'styled-css-grid';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import { Button, InputWrapper } from '../styles/components';

const _ = require('lodash');

class Add extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // Find out what is the current highest hottnes
    fetch('http://localhost:3000/api/games')
      .then(results => {
        return results.json();
      })
      .then(data => {
        // Make sure it works if there are no games in DB
        let hotValue = () => {
          if (data.length === 0) {
            hotValue = 100;
          } else {
            // eslint-disable-next-line prefer-destructuring
            hotValue = _.orderBy(data, ['hotValue'], ['desc', 'asc'])[0].hotValue;
          }
        };
        hotValue();

        const form = document.forms.addGame;
        const game = form.name.value;
        const messageBody = JSON.stringify({
          name: game,
          hotValue
        });

        fetch(`http://localhost:3000/api/games`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: messageBody
        });

        form.name.value = '';
      });
  }

  render() {
    return (
      <Layout>
        <Cell left={5} width={4} center>
          <h2>Add new games</h2>
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
