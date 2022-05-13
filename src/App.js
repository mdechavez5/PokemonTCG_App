import './App.css';
import Header from './components/Header'
import Main from './pages/Main'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>Pokemon TCG</h1>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
