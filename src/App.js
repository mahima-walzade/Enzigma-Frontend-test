import './App.css';
import { useState } from 'react';

import Addnew from './component/Addnew';
import Form from './component/Form';
import Edit from './component/Edit';
import { Route, Routes } from 'react-router-dom';
import Delete from './component/Delete';

function App() {
  // const [todolist,setTodolist]=useState([])
  // function addtask(inputtask)
  // {
  //   if(inputtask!=="")
  //   {
  //     setTodolist([...todolist,inputtask])
  //   }
  //   console.log(todolist)
  // }
  // function deletetask(key)
  // {
  //   let newtodolist=[...todolist]
  //   newtodolist.splice(key,1)
  //   setTodolist([...newtodolist])
  // }
  return (
    // <div className="App">
    //  <Addnew addtask={addtask}/>
    //  {
    //   todolist.map((item,index)=>{
    //     return (
    //       <Delete item={item} key={index} deletetask={deletetask} index={index}/>
    //     )
    //   })
    //  }
    // </div>
     <Routes>
       <Route path='/'element={<Form/>}/>
      <Route path='/tasks/create' element={<Addnew/>}/>
       <Route path='/tasks/details/:id'element={<Edit/>}/>
      <Route path='/tasks/delete/:id'element={<Delete/>}/> 

     </Routes>
     
  );
}

export default App;
