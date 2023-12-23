import image from './image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='card'>
        <img src={image} alt="qrcode" />
        <div className='card-body'>
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </div>
  );
}

export default App;
