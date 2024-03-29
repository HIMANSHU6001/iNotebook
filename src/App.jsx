import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


export default function App() {
  return (
    <div className='grid grid-flow-row grid-cols-12 grid-rows-1 h-[100vh]'>
      <div className='col-span-2 h-[100vh]'>
        <Sidebar />
      </div>
      <div className='col-span-10 h-[100vh]'> 
        <Main />
      </div>
    </div>
  )
}
