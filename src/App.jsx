import { useState } from 'react'
import './App.css'
import './Components/first.css';

function App() {
  const [notes , setNotes] = useState([]);

  return (
     <div className='full'>
      <div className="side-bar">
   <input type="text" id="search" value="search bar" ></input>
   <button className="side"> Search Notes</button>
   <hr> 
   </hr>
<br></br>
   <div><button className="side">Add Notes</button>
   </div>
      </div>
      <div className ="main">
        <div className="sect">
        <div>
        <input type="text" value="title"></input></div> 
        <div><textarea>textarea</textarea></div> 
        <button classNmae="mains"> Edit </button>
        <button classNmae="mains"> Delete</button>
      </div>
      
      </div>
     
     </div>
  )
}

export default App
