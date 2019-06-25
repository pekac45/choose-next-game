import React, { Component } from 'react';

import fetch from 'isomorphic-unfetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import Link from 'next/link';

import { TableCell, Button, LinkWrapper } from '../styles/components';
import '../styles/confirm.css';

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
      closeOnEscape: true,
      closeOnClickOutside: true,
      onClickOutside: () => {},
      buttons: [
        {
          label: 'Yes',
          id: 'confirmButton',
          onClick: () => {
            fetch(`http://localhost:3000/api/games/${this.props.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(() => {
              this.props.propsFromParent();
              this.forceUpdate();
            });
          }
        },
        {
          label: 'No',
          onClick: () => {}
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
          <Button square type="submit" onClick={this.handlePlay}>
            <FontAwesomeIcon icon={faDiceD20} />
          </Button>
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
            }}
          />
        ));

        this.setState({ games: parsedGames });
      });
  }

  render() {
    const { games } = this.state;
    return (
      <div>
        {games.length === 0 ? (
          <p>
            Add new games
            <Link href="/Add">
              <LinkWrapper>here</LinkWrapper>
            </Link>
          </p>
        ) : (
          <table>
            <table>
              <tbody>{games}</tbody>
            </table>
          </table>
        )}
      </div>
    );
  }
}

export default GameList;
