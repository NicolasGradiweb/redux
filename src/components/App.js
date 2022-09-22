import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./home";
import Menu from "./Menu";
import Users from "./users";
import Tasks from "./tasks";

const App = () => {
  const linkList = [
    {id: 0, link: '/', text: 'Home', comp: <Home/>},
    {id: 1, link: '/users', text: 'Users', comp: <Users/>},
    {id: 2, link: '/tasks', text: 'Tasks', comp: <Tasks/>}
  ];

  return (
    <Router>
      <Menu linkList={linkList}/>
      <Routes>
        {linkList.map(route => (
          <Route 
            key={route.id} 
            path={route.link} 
            element={route.comp} 
          />
        ))}
      </Routes>
    </Router>
  )
}

export default App;
