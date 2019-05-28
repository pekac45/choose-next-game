import { Component } from "react";

class GameRow extends Component {
	render() {
		const game = this.props.game;
		return (
			<tr>
				<td>{game.name}</td>
				<td>Play!</td>
			</tr>
		);
	}
}

class GameList extends Component {
	render() {
		const gameRows = this.props.games.map(game => <GameRow key={game.id} game={game} />);
		return (
			<div>
				<h2>This is issue table below</h2>
				<table>
					<thead>
						<tr>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>{gameRows}</tbody>
				</table>
			</div>
		);
	}
}
export default GameList;
