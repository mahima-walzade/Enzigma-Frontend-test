import './App.css';
import Addnew from './component/Addnew';
import Form from './component/Form';
import Edit from './component/Edit';
import { Route, Routes } from 'react-router-dom';
import Delete from './component/Delete';

function App() {
  return (
    <Routes>
      <Route path='/'element={<Form/>}/>
      <Route path='/tasks/create' element={<Addnew/>}/>
      <Route path='/tasks/details/:id'element={<Edit/>}/>
      <Route path='/tasks/delete/:id'element={<Delete/>}/>

    </Routes>
  );
}

export default App;
