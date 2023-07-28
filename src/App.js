import './App.css';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';


function App() {
  return (
    <div className="App">

    <div className="Home">
    <HomePage/>
    </div>
    
    <div className="Epage">
      <EmployeePage/>
    </div>
    
  </div>
  )
}

export default App;
