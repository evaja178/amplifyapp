import logo from './seal.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We are absolutely delighted to announce you that you won all inclusive stay at our fabulous, very well known private resort The Royals of Cam.   
          Your stay is booked from 11th to 13th of May and all you need to do is to show up. Our fabulous team will take care of everything else. 

          Please, contact us on 07871453675 to claim your prize and to arrange the details of your stay. 

          We can’t wait for your visit!!!!! 

        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=BlK9a-ccrLY&ab_channel=LondonGrammarVEVO"
          target="_blank"
          rel="noopener noreferrer"
        >
          Location
        </a>
      </header>
    </div>
  );
}

export default App;
