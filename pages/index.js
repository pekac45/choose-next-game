import Layout from "../components/Layout";
import GameList from "../components/Table";

const games = [
	{ id: 1, name: "Great Western Trail", hotness: 100, plays: 1 },
	{ id: 2, name: "Terraforming Mars", hotness: 95, plays: 3 },
	{ id: 3, name: "Spirit Island", hotness: 97, plays: 7 }
];

const Index = () => (
	<Layout>
		<h1>Choose next game</h1>
		<GameList games={games} />
	</Layout>
);

export default Index;
