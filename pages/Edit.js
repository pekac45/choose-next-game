import { Cell } from 'styled-css-grid';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import Select from 'react-select';

import Layout from '../components/Layout';
import { Button, SelectStyles } from '../styles/components';

class Edit extends Component {
  constructor() {
    super();
    this.state = { games: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/games')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const games = data.map(opt => ({ label: opt.name, value: opt._id }));
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
          <SelectStyles options={this.state.games} />
          <Button>Edit</Button>
        </Cell>
      </Layout>
    );
  }
}

export default Edit;
