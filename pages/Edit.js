import { Cell } from 'styled-css-grid';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';
import ReactSelect from 'react-select';

import Layout from '../components/Layout';

// eslint-disable-next-line no-unused-vars
import { Button, Select, InputWrapper } from '../styles/components';

const _ = require('lodash');

class Edit extends Component {
  constructor() {
    super();
    this.state = { selectedOption: '' };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/games')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const options = data.map(opt => {
          const rawGames = {};
          rawGames.key = opt._id;
          rawGames.value = opt._id;
          rawGames.label = opt.name;
          return rawGames;
        });
        this.setState({ options });
      });
  }

  handleSelectChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleDelete(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/api/games/${this.state.selectedOption.value}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // Remove array from options
    _.pull(this.state.options, this.state.selectedOption);
    this.setState({ selectedOption: '' });
  }

  handleNameChange(e) {
    e.preventDefault();
    console.log('Change name pressed');
  }

  handleInputChange(e) {}

  render() {
    const { selectedOption } = this.state;
    const { options } = this.state;
    return (
      <Layout>
        <Cell left={5} width={4} center>
          <h2>This is the Edit page</h2>
          <h2 style={{ color: '#ff2323' }}>ONLY DELETE GAME IS WORKING RIGHT NOW</h2>
        </Cell>
        <Cell left={4} width={6} center top={3}>
          <ReactSelect
            value={selectedOption}
            onChange={this.handleSelectChange}
            options={options}
          />
          <Button>Add Play</Button>
          <Button>Remove Play</Button>
        </Cell>
        <Cell left={4} width={6} center top={4}>
          <div>
            <form onSubmit={this.handleSubmit}>
              <InputWrapper
                type="text"
                placeholder={selectedOption.label}
                onChange={this.handleInputChange}
                borderTop
              />
              <Button type="submit" value="Submit" onClick={this.handleNameChange}>
                Change name
              </Button>
              <Button danger onClick={this.handleDelete}>
                Delete Game
              </Button>
            </form>
          </div>
        </Cell>
      </Layout>
    );
  }
}

export default Edit;
