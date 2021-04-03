import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user 
        ? (<Login />)
        : ( <>  
              <Header />
              <div className="app_body">
                <Sidebar />
      
                <Switch>
                  <Route path="/room/:roomid">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>
                </Switch>
              </div>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
