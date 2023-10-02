import './App.css'
import Navbar from './components/Navbar'
import Todobody from './components/Todobody'

function App() {

  return (
    <>
      <Navbar />

      <div className="container justify-content-center">
        <Todobody />
      </div>


    </>
  )
}

export default App
