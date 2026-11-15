import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Components/Input/Input";
import "./pageStyles.css";
import Button from "../Components/Button/Button";


const Login = () => {
    const navigate = useNavigate();
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
     const handleLogin = () => {
        console.log("namee, pass", 
            userNameRef.current?.value,
            passwordRef.current?.value,
        );
        navigate("/tasks");
    }
    return (
        <div className="loginPage">
        <div className="loginContainer">
          <Input 
            label="User name or email"
            isControlled={false}
            parentRef={userNameRef}
          />
          <Input 
            label="Password"
            isControlled={false}
            parentRef={passwordRef}
            type="password"
          />
          <Button 
            label="Login"
            handleClick={handleLogin}
          />
        </div>
        </div>
    )
}

export default Login;