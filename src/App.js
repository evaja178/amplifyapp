import logo from './seal.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We are absolutely delighted to announce to you that you have won all inclusive stay at our fabulous, very well known private resort The Royals of Cam. ~{"\n"}
    Your stay has been booked from 11th to 13th of May and all you need to do is to show up. We will take care of everything else. ~{"\n"}

          Please, contact us on 07871453675 to claim your prize and to arrange the details of your stay.~{"\n"}

          We can’t wait for your visit! 

        </p>
        <a
          className="App-link"
          href="https://www.google.com/maps/@52.2185853,0.1458061,19z"
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
