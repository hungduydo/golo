import { Link, Redirect} from 'react-router-dom';
import React, { useState } from 'react';
import { Input, Label } from 'reactstrap';
import auth, { useAuth } from "../../context/auth";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function login() {
    auth.login(userName, password)
    .then(result => {
      if (result) {
        setAuthTokens(result.token);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12 text-center p-5 card-login my-5">
            <h1 className="text-xs-center title">Đăng nhập</h1>
            <p className="text-xs-center description">
              Find your next great investment, now easier and faster with Golo.vn
            </p>

            <form>
              <fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email/số điện thoại"
                    value={userName}
                    onChange={e => {
                      setUserName(e.target.value);
                    }} />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={e => {
                      setPassword(e.target.value);
                    }} />
                </fieldset>
                {isError ? (<p className="error-message">Sai username hoặc password</p>) : ''}
                <p className="d-flex justify-content-between">
                  <Label check className="ml-4"><Input type="checkbox" />{' '}Gi nhớ đăng nhập</Label>
                  <Link className="float-right" to="/forget-pass">Bạn quên mật khẩu?</Link>
                </p>

                <button
                  type="button"
                  className="btn btn-lg btn-primary btn-block"
                  onClick={login}>
                  Đăng nhập
                </button>
                {/* <p className="text-xs-center description py-4">
                  Hoặc đăng nhập bằng
                </p>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  onClick={this.loginFb}
                  disabled={this.props.inProgress}>
                  Login with Facebook
                </button> */}
                <p className="pt-4 lg-register">Bạn chưa có tài khoản? <Link to="/register">Đăng ký nhanh, miễn phí</Link></p>
              </fieldset>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
