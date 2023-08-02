import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Routes/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Blog App</h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
