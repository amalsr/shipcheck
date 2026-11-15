import { useRef, useState, type SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input/Input";
import "./pageStyles.css";
import Button from "../Components/Button/Button";


const Login = () => {
    const navigate = useNavigate();
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState("");

    const handleLogin = (e: SubmitEvent<HTMLFormElement>) => {
        // stop the browser from reloading the page on form submit
        e.preventDefault();
        const userName = userNameRef.current?.value.trim();
        const password = passwordRef.current?.value;

        if (!userName || !password) {
            setError("Please enter your username and password.");
            return;
        }
        setError("");
        navigate("/tasks", { replace: true });
    }

    return (
        <div className="loginPage">
          <form className="loginCard" onSubmit={handleLogin} noValidate>
            <div className="loginHeader">
              <h1 className="loginTitle">Sign in to ShipCheck</h1>
              <p className="loginSubtitle">Welcome back! Please enter your details.</p>
            </div>

            <Input
              label="Username or email"
              isControlled={false}
              parentRef={userNameRef}
              placeholder="you@example.com"
              autoComplete="username"
            />
            <Input
              label="Password"
              isControlled={false}
              parentRef={passwordRef}
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />

            {error && <p className="loginError" role="alert">{error}</p>}

            <Button
              label="Sign in"
              type="submit"
              customStyle="loginButton"
            />
          </form>
        </div>
    )
}

export default Login;
