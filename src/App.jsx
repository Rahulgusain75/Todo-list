import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg from './images/1567665.webp'

function App() {

  let[todolist,settodolist] = useState([]);

  let savetodolist = (event) =>{

    let toname = event.target.toname.value;
    if(!todolist.includes(toname)){
       let finaldolist =[...todolist,toname]
       settodolist(finaldolist);
    }
    else{
      alert("todo list already exist");
    }
    event.preventDefault();
   }
  
   let list=todolist.map((value,index)=>{
    return(
      <Todolistitems value={value} key={index} indexnumber={index} todolist={todolist} settodolist={settodolist}/>
    );

})

  return (
    <>
      <div className='app' >
        <div className='upperdiv'>
        <h1 className='head'>  ToDo List </h1>
        <form onSubmit={savetodolist}>
          <input type='text' name='toname' placeholder='Task to be done....'/> <button>Save</button>
        </form>
        </div>
        <div className='lowerdiv'>
        <h2 className='head2' > List of work to do...</h2>
        <div className='outerdiv'>
          <ul>
          {list}
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;

function Todolistitems({value,todolist,indexnumber,settodolist}) {

  let [status,setstatus] =useState(false);

  let deleterow = ()=>{
          let finaldata = todolist.filter((v,i) => i!=indexnumber)
          settodolist(finaldata);

          }

  let checkstatus=()=>{
     setstatus(!status);
  }        
  return (
    <li className={(status)? 'completetodo' : ''} onClick={checkstatus}>{indexnumber+1}. {value}<span onClick={deleterow}>&times;</span></li>
  )
}
