import Landing from './Components/Landing';
import News from './Components/News';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Partner from './Components/landing/Partner';
import Cards from './Components/news/cards';


function App() {
  return (
    <div className="App">
      <Landing/>
      <Partner/>
      <News/>
      
    </div>
  );
}

export default App;
