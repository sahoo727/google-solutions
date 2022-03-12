import Landing from './Components/Landing';
import News from './Components/News';
import Partner from './Components/landing/Partner';
import Mission from './Components/Mission';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from './Components/news/Cards';


function App() {
  return (
    <div className="App">
      <Landing/>
      <Partner/>
      <Mission/>
      <News/>

      
    </div>
  );
}

export default App;
