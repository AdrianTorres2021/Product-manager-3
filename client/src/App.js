import './App.css';
import Home from './views/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './views/Detail';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" index element ={<Home/>}/>
            <Route path="/product/:id" element ={<Detail/>}/>
            <Route path="/product/:id/edit" element ={<Edit/>}/>
          </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
