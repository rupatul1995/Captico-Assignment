import logo from './logo.svg';
import './App.css';
import {Routes ,Route} from "react-router-dom";
import Login from './Component/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Login/>} />
      </Routes>

    </div>
  );
}

export default App;
