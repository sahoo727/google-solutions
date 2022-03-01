import Landing from './Components/Landing';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Partner from './Components/landing/Partner';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Partner/>
    </div>
  );
}

export default App;
