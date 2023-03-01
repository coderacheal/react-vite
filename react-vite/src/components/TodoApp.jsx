import Header from "./Header";
import TodosLogic from "./TodosLogic";


// const TodoApp = () => {
//     return (
//       // <div className="wrapper">
//       //   <div className="todos">
//       //     <Header />
//       //     <TodosLogic />
//       //   </div>
//       // </div>
//     );
//   };
  
// export default TodoApp;

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../routes/Home';
import About from '../routes/About';
import Login from '../routes/Login';
import Profile from '../routes/Profile';
import NotMatch from '../routes/NotMatch';

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default TodoApp;
