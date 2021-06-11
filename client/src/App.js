import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  //useQuery,
  //gql,
} from "@apollo/client";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './spacex-logo.png';
import Launches from './components/Launches';
import Launch from './components/Launch';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <header className="p-4">
            <img src={logo} alt="SpaceX" style={{height: 25, display: 'block', margin: 'auto'}} />
          </header>
          <Route exact path="/" component={Launches}></Route>
          <Route exact path="/launch/:flight_number" component={Launch}></Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
