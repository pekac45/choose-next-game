import { Cell } from 'styled-css-grid';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars

import Layout from '../components/Layout';
import { Button, Select, InputWrapper } from '../styles/components';

class Edit extends Component {
  constructor() {
    super();
    this.state = { games: [], edit: true };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/games')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const games = data.map(opt => (
          <option value={opt._id} key={opt._id}>
            {opt.name}
          </option>
          // label: opt.name, value: opt._id
        ));
        this.setState({ games });
      });
  }

  render() {
    return (
      <Layout>
        <Cell left={5} width={4} center>
          <h2>This is the Edit page.</h2>
        </Cell>
        <Cell left={4} width={6} center top={3}>
          <Select>{this.state.games}</Select>
          <Button>Add Play</Button>
          <Button>Remove Play</Button>
        </Cell>
        <Cell left={4} width={6} center top={4}>
          {this.state.edit ? (
            <div>
              <form onSubmit={this.handleSubmit}>
                <InputWrapper type="text" value={this.state.value} onChange={this.handleChange} />
                <Button type="submit" value="Submit">
                  Change name
                </Button>
                <Button danger>Delete Game</Button>
              </form>
            </div>
          ) : null}
        </Cell>
      </Layout>
    );
  }
}

export default Edit;
