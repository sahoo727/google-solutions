import Landing from './Components/Landing';
import News from './Components/News';
import Partner from './Components/landing/Partner';
import Mission from './Components/Mission';
import Provider from './Components/Provider';
import Consumer from './Components/Consumer';
// import ReactDOM from 'react-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cards from './Components/news/Cards';
import News_Add from './Components/Admin/News_Add';


function App() {
  return (
    <div className="App">
      {/* <Landing/>
      <Partner/>
      <Mission/>
      <News/>
      <News_Add/> */}
      <Provider/>
      
    </div>
  );
}

export default App;
