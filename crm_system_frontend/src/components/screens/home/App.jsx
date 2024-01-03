import './App.css'
import '../../../assets/styles/global-styles.css'
import '@mui/x-date-pickers'
import Usercount from './Usercount/Usercount'

function App() {
  // const [count, setCount] = useState(1)

  // function addCount(){
  //   if(count != 0) {
  //     setCount((count) => count + 1)
  //   }
  // }
  // <h1>Vite + React</h1>
  // <div className="card">
  //   <button onClick={
  //     addCount
  //     }>
  //     count is {count}
  //   </button>
  //   <p>
  //     Edit <code>src/App.jsx</code> and save to test HMR
  //   </p>
  // </div>
  // <p className="read-the-docs">
  //   Click on the Vite and React logos to learn more
  // </p>
  


  return (
    <div className='mainplace'>
      <Usercount/>
    </div>
  )
}

export default App
