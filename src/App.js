import './App.css'
import Header from './components/Header'
import Search from './components/Search'
// import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Main/> */}
      <Search/>
      <Footer/>
    </div>
  )
}

export default App
