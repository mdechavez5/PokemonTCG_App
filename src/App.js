import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SetList from './components/SetList'

function App() {
  return (
    <div className="App">
      <Header/>
      <SetList/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
