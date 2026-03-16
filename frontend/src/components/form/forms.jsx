import "./forms.css";
import { Button1 } from "../buttons/buttons.jsx";
import { useState } from "react";

export function LoginForm({ heading, subheading, includeUsername = true, includeEmail = true, onLoginSuccess }) {
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");

  // Ensure at least username or email is included
  if (!includeUsername && !includeEmail) includeUsername = true;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hard-coded credentials
    const validEmail = "byleveldsimone8@gmail.com";
    const validPassword = "penguin";

    if (inputEmail === validEmail && inputPassword === validPassword) {
      onLoginSuccess();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <h2>{heading}</h2>
      <h3>{subheading}</h3>

      {includeUsername && (
        <>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </>
      )}

      {includeEmail && (
        <>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            required
          />
        </>
      )}

      <>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          required
        />
      </>

      <Button1 type="submit" text="Login" />

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </form>
  );
}
