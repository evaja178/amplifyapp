import logo from './seal.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We are absolutely delighted to announce to you that you have won all inclusive stay at our fabulous, very well known private resort The Royals of Cam. {"\n"}
    Your stay has been booked from 11th to 13th of May and all you need to do is to show up. We will take care of everything else. {"\n"}

          Please, contact us on 07871453675 to claim your prize and to arrange the details of your stay. {"\n"}

          We can’t wait for your visit! 

        </p>
        <a
          className="App-link"
          href="https://www.google.com/maps/place/2120+Water+St,+Chesterton,+Cambridge+CB4+1XZ/@52.217951,0.1449317,18z/data=!4m5!3m4!1s0x47d87058db12df2f:0x6c8dc158c741fdd8!8m2!3d52.2186!4d0.146969"
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
