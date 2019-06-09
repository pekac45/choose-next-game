import { Cell } from 'styled-css-grid';
import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';

import Layout from '../components/Layout';
import { Button, Select, SelectWrapper } from '../styles/components';

class Edit extends Component {
  render() {
    return (
      <Layout>
        <Cell left={5} width={4} center>
          <h2>This is the Edit page.</h2>
        </Cell>
        <Cell left={4} width={6} center top={3}>
          <SelectWrapper>
            <Select>
              <option value="Terraforming Mars">Terraforming Mars</option>
              <option value="Twilight Struggle">Twilight Struggle</option>
              <option value="Root">Root</option>
            </Select>
          </SelectWrapper>
          <Button>Edit</Button>
        </Cell>
      </Layout>
    );
  }
}

export default Edit;
