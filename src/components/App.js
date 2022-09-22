import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Menu from "./Menu";
import Users from "./users";

const App = () => {
  const linkList = [
    {id: 1, link: '/users', text: 'Users'},
    {id: 2, link: '/tasks', text: 'Tasks'},
  ]

  return (
    <Router>
      <Menu linkList={linkList}/>
      <Routes>
        <Route path="/users" element={<Users/>} />
      </Routes>
    </Router>
  )
}

export default App;
