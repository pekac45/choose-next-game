import React, { Component, useState, useEffect, useCallback } from 'react';

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
            });
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
  game: PropTypes.string
};

// CONFIRMATION BUTTON
// document.getElementsByClassName('react-confirm-alert-button-group')[0].children[0];

function GameList() {
  const [games, setGames] = useState(0);

  const handleClick = useCallback(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    fetch('http://localhost:3000/api/games', { signal })
      .then(results => {
        console.log('fetching');

        return results.json();
      })
      .then(data => {
        const rawGames = _.orderBy(data, ['hotValue'], ['desc', 'asc']).slice(0, 3);
        const parsedGames = rawGames.map(game => (
          <GameRow key={game._id} game={game.name} id={game._id} />
        ));
        setGames(parsedGames);
        console.log('fetched ', parsedGames);
      });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick]);

  // useEffect(() => {
  // const abortController = new AbortController();
  // const { signal } = abortController;
  // fetch('http://localhost:3000/api/games', { signal })
  //   .then(results => {
  //     console.log('fetching');
  //     return results.json();
  //   })
  //   .then(data => {
  //     const rawGames = _.orderBy(data, ['hotValue'], ['desc', 'asc']).slice(0, 3);
  //     const parsedGames = rawGames.map(game => (
  //       <GameRow key={game._id} game={game.name} id={game._id} />
  //     ));
  //     setGames(parsedGames);
  //     console.log('fetched ', parsedGames);
  //   });
  // return function cleanup() {
  //   abortController.abort();
  // };
  // }, []);

  return (
    <div>
      <table>
        <tbody>{games}</tbody>
      </table>
    </div>
  );
}

export default GameList;
