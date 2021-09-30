import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './route/Home';
import About from './route/About';
import Navigation from './components/navigation/navigation';
import MovieDetails from './route/MovieDetails';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navigation />
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/movies/:id" component={MovieDetails} />
      </HashRouter>
    </div>
  );
}

export default App;
