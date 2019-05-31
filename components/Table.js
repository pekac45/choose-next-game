import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { Grid, Cell } from "styled-css-grid";
import { TableCell } from "../styles/components";

class GameRow extends Component {
	render() {
		const game = this.props.game;
		return (
			<tr>
				<TableCell>{game.name}</TableCell>
				<TableCell>
					<FontAwesomeIcon icon={faDiceD20} />
				</TableCell>
			</tr>
		);
	}
}

class GameList extends Component {
	render() {
		const gameRows = this.props.games.map(game => <GameRow key={game.id} game={game} />);
		return (
			<div>
				<table>
					<tbody>{gameRows}</tbody>
				</table>
			</div>
		);
	}
}
export default GameList;
