import React, { Component } from 'react';
import { Cell } from 'styled-css-grid';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import { Button, InputWrapper, FormGroupWrapper } from '../styles/components';

const _ = require('lodash');

class Add extends Component {
  constructor() {
    super();

    this.state = { gameName: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hangleGameNameChange = e => {
    this.setState({ gameName: e.target.value });
  };

  canBeSubmitted() {
    const { gameName } = this.state;
    return gameName.length > 2;
  }

  // TODO: MAKE THIS MORE DRY

  handleSubmit(e) {
    // TODO: Make more input sanitizing
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
            hotValue = 10000;
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

  handleNewSubmit(e) {
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
            hotValue = 10000;
          } else {
            // eslint-disable-next-line prefer-destructuring
            hotValue = _.orderBy(data, ['hotValue'], ['desc', 'asc'])[0].hotValue + 1;
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
    const { gameName } = this.state;
    const isEnabled = gameName.length > 1;
    const isError = gameName.length === 1;
    return (
      <Layout>
        <Cell left={5} width={4} center>
          <h2>Add new games</h2>
        </Cell>
        <Cell left={4} width={6} center top={3}>
          <FormGroupWrapper name="addGame">
            <InputWrapper
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.hangleGameNameChange}
              error={isError ? '0px 0px 2px 1px var(--danger-color)' : ''}
            />
            <Button disabled={!isEnabled} className="btn" onClick={this.handleNewSubmit}>
              Add New
            </Button>
            <Button disabled={!isEnabled} className="btn" onClick={this.handleSubmit}>
              Add Existing
            </Button>
          </FormGroupWrapper>
        </Cell>
        <Cell left={5} width={3} center top={4}>
          {isError ? (
            <p style={{ color: 'var(--danger-color)' }}>Name needs to be 2 characters long.</p>
          ) : null}
        </Cell>
      </Layout>
    );
  }
}

export default Add;
