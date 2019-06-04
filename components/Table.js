/* eslint-disable react/prop-types */
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line no-unused-vars
import { Grid, Cell } from 'styled-css-grid';
import { TableCell } from '../styles/components';

class GameRow extends Component {
  render() {
    const { game } = this.props;
    return (
      <tr>
        <TableCell>{game}</TableCell>
        <TableCell>
          <FontAwesomeIcon icon={faDiceD20} />
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
    fetch('http://jsonplaceholder.typicode.com/albums')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const games = data.map(game => <GameRow key={game.id} game={game.title} />).slice(0, 3);
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
