import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './components/Header';
import { Home } from './Pages/Home';
import { Data} from './Pages/Data';

export default function App() {
  return (
<BrowserRouter>
  < Header />

  <Routes>
    <Route path='/' element={ < Home />} />
    <Route path='/data' element={ < Data />} />
  </Routes>
</BrowserRouter>
  );
  
}
