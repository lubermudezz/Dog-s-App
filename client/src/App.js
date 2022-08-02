import { Route } from 'react-router-dom';
import CreateNewDog from './components/CreateDog/CreateDog';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Dogs from './components/Dogs/Dogs';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/dogs'} component={Dogs}/>
      <Route path={'/dogs/create'} component={CreateNewDog}/>
      <Route path={'/dogs/search'} component={Dogs} />
      <Route path={'/dogs/detail/:dogId'} component={Detail} />
      
    </div>
  );
}

export default App;
