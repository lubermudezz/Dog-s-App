import { Route } from 'react-router-dom';
import CreateNewDog from './components/CreateDog';
import './App.css';
import Home from './components/Home';
import Navbar from './components/NavBar';
import Dogs from './components/Dogs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/dogs'} component={Dogs}/>
      <Route path={'/dogs/create'} component={CreateNewDog}/>
      <Route path={'/dogs/search'} component={Dogs} />
      
      <h1>Henry Dogs</h1>
    </div>
  );
}

export default App;
