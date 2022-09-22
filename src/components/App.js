import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./home";
import Menu from "./Menu";
import Users from "./users";

const App = () => {
  const linkList = [
    {id: 0, link: '/', text: 'Home'},
    {id: 1, link: '/users', text: 'Users'},
    {id: 2, link: '/tasks', text: 'Tasks'},
  ];

  return (
    <Router>
      <Menu linkList={linkList}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<Users/>} />
      </Routes>
    </Router>
  )
}

export default App;
