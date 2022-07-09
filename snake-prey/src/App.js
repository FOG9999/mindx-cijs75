import logo from "./logo.svg";
import "./App.css";
import HomePage from "./containers/HomePage";
import ClassHomePage from "./containers/ClassHomePage";
import GameWrapper from "./components/GameWrapper";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import StudentList, { StudentListItem } from "./components/StudentList";
// react-router-dom

const authenticate = (component) => {
  let token = localStorage.getItem('token');
  // gui api xac thuc cho BE -> true, false
  let isAuthenticated = false;
  if(isAuthenticated){
    return component;
  }
  else {
    return <Navigate to={'/login'} />
  }
}

function App() {
  return (
    <Routes>
      <Route path="/" element={authenticate(<GameWrapper />)} />
      <Route path="/login" element={<Login />} />
      <Route path="/student/:id" element={<StudentList />}>
        <Route path=":age" element={<StudentListItem />} />
      </Route>
      {/* <Route exact path="/" component={GameWrapper} /> */}
    </Routes>
  );
}

export default App;
