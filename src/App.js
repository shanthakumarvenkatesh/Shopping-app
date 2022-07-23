import React from 'react'
import Header from './Components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App








































// _____________________________________________________________________________________________________________________________________
// Simple todolist using usestate and props

// import React, { useState } from 'react'
// import TodoList from './TodoList';
// const App = () => {
//   const [task,setTask]=useState("");
//   const [todos,setTodos]=useState([]);
 
//   const changeHandler=e=>{
//     setTask(e.target.value)
//   }

//   const submitHandler =e=>{
//     e.preventDefault();
//     const newTodos=[...todos,task];
//     setTodos(newTodos);
//     setTask("")
//     console.log(newTodos)
//   }
//   const deleteHandler=(indexvalue)=>{
//     const newTodos =todos.filter((todo,index)=> index!==indexvalue)
//     setTodos(newTodos)
//   }
//   return (
//     <div><center>

//       <div className='card'>
//         <div className='card-body'>
//           <h5 className='card-title'>Todo</h5>
//           <form onSubmit={submitHandler}>
//             <input type='text' name='task'onChange={changeHandler} value={task} />&nbsp;&nbsp;&nbsp;
//             <input type='submit' value='Add' name='Add' className='btn btn-success'/>        
//           </form>
//           <TodoList  todos={todos} deleteHandler={deleteHandler}/>
//         </div>
//       </div>
//     </center>

//     </div>
//   )
// }

// export default App


// --------------------------------------------------------------------------------------------------------------------

// import React, { useState } from 'react'

// const App = () => {
//   const [search,setSearch]=useState('');
// const submitHandler= e=>{
//   e.preventDefault();
//   // console.log(search)
// }

//   return (
//     <div><center>
//        <h4>
//         Food reciepe
//       </h4>
//       <form onSubmit={submitHandler}>
//         <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
//         <input type='submit' value='search'/>
//       </form>
//     </center>
//     </div>
//   )
// }

// export default App