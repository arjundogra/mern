import React, { useEffect, useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  useEffect(() => {
    if (password !== cPassword) {
      alert("Wrong");
    }
  }, [cPassword]);
  const handleSubmit = () => {
    alert("Hello");
  };
  return (
    <div className="form">
      <h2 className="head">Sign Up</h2>
      <div className="formData">
        <label className="label">Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="formData">
        <label className="label">Email Id</label>
        <input
          type="email"
          placeholder="Email Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="formData">
        <label className="label">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="formData">
        <label className="label">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={cPassword}
          onChange={(e) => setCPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
