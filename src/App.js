import './App.css';
import Login from "./page/login";
import Signin from "./page/signin";
import Home from "./page/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Login/>

      </header>
    </div>
  );
}
//"heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build",
export default App;
