import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [isClicked, setClick] = useState(false);

  return (
    <div>
      <button onClick={() => setClick(!isClicked)}>Click Me!</button>
      {isClicked && <h1>Hello</h1>}
    </div>
  );
};

// class App extends Component {
//   state = { username: null };

//   componentDidMount() {
//     fetch('/api/getUsername')
//       .then(res => res.json())
//       .then(user => this.setState({ username: user.username }));
//   }

//   render() {
//     const { username } = this.state;
//     return <div>{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}</div>;
//   }
// }

export default App;
