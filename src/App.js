import './App.css';
import Footer from './components/Footer/Footer';
import Questions from './components/Questions/Questions';


function App() {
  return (
    <div className="App">
      <Questions/>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
