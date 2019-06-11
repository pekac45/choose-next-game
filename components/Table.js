/* eslint-disable react/prop-types */
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line no-unused-vars
import { Grid, Cell } from 'styled-css-grid';
import { TableCell } from '../styles/components';

const _ = require('lodash');

class GameRow extends Component {
  render() {
    const { game } = this.props;
    return (
      <tr>
        <TableCell>{game}</TableCell>
        <TableCell>
          <button type="submit">
            <FontAwesomeIcon icon={faDiceD20} />
          </button>
        </TableCell>
      </tr>
    );
  }
}

class GameList extends Component {
  constructor() {
    super();
    this.state = { games: [] };
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/games')
      .then(results => {
        // console.log(results);
        return results.json();
      })
      .then(data => {
        // console.log(data);
        const rawGames = _.orderBy(data, ['hotValue'], ['desc', 'asc']).slice(0, 3);
        const games = rawGames.map(game => <GameRow key={game._id} game={game.name} />);
        this.setState({ games });
      });
  }

  render() {
    const { games } = this.state;
    return (
      <div>
        <table>
          <tbody>{games}</tbody>
        </table>
      </div>
    );
  }
}
export default GameList;
