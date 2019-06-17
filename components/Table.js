import React, { Component } from 'react';

import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';

// eslint-disable-next-line no-unused-vars
import { Grid, Cell } from 'styled-css-grid';
import { TableCell } from '../styles/components';

const _ = require('lodash');

class GameRow extends Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handlePlay = e => {
    e.preventDefault();
    confirmAlert({
      title: 'Log Play',
      message: 'Log Play',
      buttons: [
        {
          label: 'Yes',
          id: 'confirmButton',
          onClick: () => {
            console.log('pressed yes on', this.props.game);
            fetch(`http://localhost:3000/api/games/${this.props.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(this.props.propsFromParent());
          }
        },
        {
          label: 'No',
          onClick: () => {
            console.log('pressed no on', this.props.game);
          }
        }
      ]
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
  game: PropTypes.string,
  // eslint-disable-next-line react/no-typos
  propsFromParent: PropTypes.function
};

class GameList extends Component {
  constructor() {
    super();
    this.state = { games: '', counter: 0 };
  }

  componentDidMount() {
    this.handleGames();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter !== prevState.counter) {
      this.handleGames();
    }
  }

  handleGames() {
    fetch('http://localhost:3000/api/games')
      .then(results => {
        console.log('fetching');

        return results.json();
      })
      .then(data => {
        const { counter } = this.state;
        const rawGames = _.orderBy(data, ['hotValue'], ['desc', 'asc']).slice(0, 3);
        const parsedGames = rawGames.map(game => (
          <GameRow
            key={game._id}
            game={game.name}
            id={game._id}
            propsFromParent={() => {
              this.setState({ counter: counter + 1 });
              console.log(counter);
            }}
          />
        ));

        this.setState({ games: parsedGames });
        console.log('fetched ', parsedGames);
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
