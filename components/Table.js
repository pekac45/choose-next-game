import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
import { Grid, Cell } from 'styled-css-grid';
import { TableCell } from '../styles/components';

const _ = require('lodash');

class GameRow extends Component {
  handlePlay = e => {
    e.preventDefault();

    fetch(`http://localhost:3000/api/games/${this.props.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  render() {
    const { game } = this.props;
    return (
      <tr>
        <TableCell>{game}</TableCell>
        <TableCell>
          <button type="submit">
            <FontAwesomeIcon icon={faDiceD20} onClick={this.handlePlay} />
          </button>
        </TableCell>
      </tr>
    );
  }
}

GameRow.propTypes = {
  id: PropTypes.string,
  game: PropTypes.string
};

class GameList extends Component {
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
        const rawGames = _.orderBy(data, ['hotValue'], ['desc', 'asc']).slice(0, 3);
        const games = rawGames.map(game => (
          <GameRow key={game._id} game={game.name} id={game._id} />
        ));
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
