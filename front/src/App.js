import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleSubmit = () => {
    alert("Hello");
  };
  return (
    <div className="App">
      <div className="form">
        <h2 className="head">Sign Up</h2>
        <div className="formData">
          <label className="label">Name</label>
          <input type="text" placeholder="Name" />
        </div>
        <div className="formData">
          <label className="label">Email Id</label>
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="formData">
          <label className="label">Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="formData">
          <label className="label">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </div>
        <button type="button" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default App;
