import { useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { ACCOUNT } from "../consts";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [queryParams] = useSearchParams();

  const onChangeUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
    onChangeInput(e);
  };

  const onChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    onChangeInput(e);
  };

  const onChangeInput = (e) => {
    let inputName = e.target.name;
    let funcName = "set" + inputName; // setUsername or setPassword
    eval(funcName)(e.target.value);
  };

  const onLogin = () => {
    let account = JSON.parse(localStorage.getItem("account"));
    if (account) {
      if (username !== account.username) {
        alert("Username not exist");
        return;
      } else {
        if (password !== account.password) {
          alert("Password incorrect");
          return;
        } else {
          setIsLoggedIn(true);
        }
      }
    }
  };

  const useCallbackFunc = useCallback(() => {
    // ghi nhớ một logic khó  và cache lại trên memory
    // return một function
  }, [username]);


  const useMemoFunc = useMemo(() => {
    // ghi nhớ một giá trị cache lại trên memory
    // return giá trị
  }, [username])

  useEffect(() => {
    console.log(queryParams);
    localStorage.setItem("account", JSON.stringify(ACCOUNT));
    // local st: k bị clear, f5, logout, session, forever,
    // session: clear, dung lượng nhỏ, f5, logout
    // cookies: lưu trữ vài thông tin bảo mật, dung lượng nhỏ
  }, []);

  return (
    // <form>
      <div className="login-container">
        {isLoggedIn ? <Navigate to={"/"} /> : null}
        <div>
          <input
            autocomplete="false"
            name="hidden"
            type="text"
            style={{display: 'none'}}
          />
        </div>
        <div>
          <input
            type="text"
            value={username}
            className="username"
            name="Username"
            onChange={onChangeInput}
            // autoComplete="false"
            // autocomplete="off"
          />
        </div>
        <div>
          <input
            type="password"
            className="password"
            value={password}
            name="Password"
            onChange={onChangeInput}
            autoComplete="new-password"
            // autocomplete="new-password"
          />
        </div>
        {/* <div>
          <input type="password" name="password" autocomplete="new-password" />
        </div> */}
        <div>
          <button onClick={() => onLogin()}>Login</button>
        </div>
      </div>
    // </form>
  );
};

export default Login;
