import Layout from '../components/Layout';
import GameList from '../components/Table';
import { Grid, Cell } from 'styled-css-grid';

const games = [
  { id: 1, name: 'Great Western Trail', hotness: 100, plays: 1 },
  { id: 2, name: 'Terraforming Mars', hotness: 95, plays: 3 },
  { id: 3, name: 'Spirit Island', hotness: 97, plays: 7 }
];

const Index = () => (
  <Layout>
    <Cell left={5} width={4} center>
      <h1>Choose next game</h1>
    </Cell>
    <Cell left={2} width={8} top={3}>
      <GameList games={games} />
    </Cell>
  </Layout>
);

export default Index;
