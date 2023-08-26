import logo from './logo.svg';
import './App.css';
import University from './components/University';
import Navbar from './components/Navbar';
import Mentor from './components/Mentor';
import Advisor from './components/Advisor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <University/>
     <Mentor/>
     <Advisor/>
     <Footer/>
    </div>
  );
}

export default App;
