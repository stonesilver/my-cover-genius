import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar.nav';
import Homepage from './components/pages/Homepage/Homepage.page';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <main className='main-content'>
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
