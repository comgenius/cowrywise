import React from "react";
import { Link } from "react-router-dom";
import LoginStyle from "../components/LoginStyle";

const login = () => {
  return (
    <div className="container auth-area">
      <LoginStyle/>
      <div className="grid">
        <div className="c-no-gutter c-xs-12">
        <Link to="/cowrywise">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              svg-inline=""
              role="presentation"
              focusable="false"
              tabIndex={-1}
              className="cw-logo"
            >
              <path
                d="M14.896.5H6.828l-.016.028L5.7 2.571h9.197c6.812 0 12.338 5.564 12.338 12.427 0 6.863-5.524 12.426-12.338 12.426-6.815 0-12.34-5.564-12.34-12.426 0-1.299.202-2.589.599-3.824H5.51c-1.67 4.156-.448 8.923 3.01 11.746a10.067 10.067 0 0012.034.533c3.692-2.506 5.325-7.146 4.024-11.434-1.301-4.287-5.23-7.216-9.682-7.216H4.483l-1.129 2.07h11.542c3.625 0 6.805 2.437 7.772 5.956.967 3.52-.516 7.256-3.625 9.134a8.023 8.023 0 01-9.708-1.08 8.166 8.166 0 01-1.558-9.71h2.669a5.924 5.924 0 00-.207 7.381 5.824 5.824 0 007.113 1.787c2.494-1.16 3.85-3.912 3.26-6.614-.591-2.702-2.97-4.626-5.716-4.624H2.138L1.01 11.174a14.62 14.62 0 00-.51 3.824c0 8.006 6.445 14.497 14.396 14.497 7.95 0 14.395-6.49 14.395-14.497S22.845.5 14.896.5zm0 10.674c2.096 0 3.796 1.712 3.796 3.824 0 2.111-1.7 3.823-3.796 3.823-2.097 0-3.797-1.712-3.797-3.823 0-2.112 1.7-3.824 3.797-3.824zm20.723 4.13c0-4.028 2.683-6.858 6.707-6.858 2.48 0 4.505 1.096 5.568 2.932l-2.328 1.657c-.735-1.173-1.848-1.734-3.164-1.734-2.176 0-3.62 1.557-3.62 4.003 0 2.421 1.443 4.002 3.62 4.002 1.317 0 2.43-.587 3.164-1.76l2.328 1.658c-1.063 1.86-3.088 2.931-5.568 2.931-4.024 0-6.707-2.83-6.707-6.831zm12.713 0c0-3.773 2.658-6.858 6.783-6.858 4.151 0 6.784 3.085 6.784 6.858 0 3.747-2.634 6.831-6.784 6.831-4.123 0-6.783-3.084-6.783-6.831zm10.403 0c0-2.37-1.393-4.028-3.62-4.028-2.226 0-3.62 1.657-3.62 4.028 0 2.345 1.393 4.002 3.62 4.002 2.228 0 3.62-1.657 3.62-4.002zm23.433-6.502l-3.95 12.975h-3.335l-2.792-9.151-2.817 9.151h-3.34L62.007 8.802h3.064l2.668 9.355 2.866-9.355h2.965l2.866 9.355 2.643-9.355zm43.39 0l-3.953 12.975h-3.336l-2.792-9.151-2.816 9.151h-3.333L105.4 8.805h3.063l2.669 9.355 2.863-9.358h2.965l2.866 9.355 2.644-9.355zM91.41 8.753v2.905a9.407 9.407 0 00-1.418-.127c-2.253 0-3.442 1.147-3.442 3.849v6.4h-3.087V8.802h3.035v2.168c.633-1.504 2.024-2.396 3.796-2.396a3.18 3.18 0 011.115.179zm12.81.05v11.674c0 4.36-2.404 6.755-6.657 6.755-2.201 0-4.226-.663-5.441-1.81l1.392-2.269c1.087.865 2.506 1.3 3.873 1.3 2.379 0 3.796-1.35 3.796-3.978v-1.119c-.734 1.428-2.303 2.294-4.202 2.294-2.733 0-4.454-1.733-4.454-4.894V8.802h3.088v7.164c0 1.989.81 2.855 2.43 2.855 1.873 0 3.113-1.146 3.113-3.033V8.802h3.063zM126.37 4.7c0-1.122.785-1.938 1.975-1.938 1.164 0 1.946.816 1.946 1.938 0 1.121-.784 1.937-1.946 1.937-1.19 0-1.974-.816-1.974-1.937zm.431 4.103h3.088v12.975h-3.088V8.803zm4.642 10.86l1.67-1.964c1.012 1.122 2.582 1.785 4.227 1.785 1.468 0 2.278-.56 2.278-1.376 0-.689-.506-1.122-1.797-1.428l-2.1-.484c-2.684-.637-3.823-1.887-3.823-3.671 0-2.396 1.974-4.079 5.316-4.079 2.278 0 4.176.79 5.29 2.066l-1.646 2.013c-1.113-.969-2.379-1.428-3.72-1.428-1.444 0-2.152.536-2.152 1.326 0 .612.43.994 1.797 1.3l2.227.536c2.708.611 3.696 1.86 3.696 3.644 0 2.575-1.975 4.232-5.391 4.232-2.557 0-4.708-.968-5.872-2.473zm24.976-3.442h-9.594c.33 2.09 1.696 3.212 3.797 3.212 1.442 0 2.657-.535 3.594-1.632l1.848 1.836c-1.215 1.58-3.164 2.498-5.544 2.498-4.1 0-6.834-2.702-6.834-6.78 0-4.028 2.634-6.909 6.531-6.909 3.746 0 6.277 2.626 6.277 6.577 0 .4-.026.8-.075 1.198zm-9.594-2.115h6.584c-.152-1.912-1.317-2.957-3.164-2.957-1.9 0-3.09 1.096-3.42 2.957z"
                fill="#0066F5"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div data-testid="login-page" className="grid">
        <div className="c-no-gutter c-md-6 c-sm-12 c-xs-12">
          <h3 className="u-font-bold">Jump right back in</h3>
          <h5 className="u-t-light-3 u-font-bold">Sign in to continue</h5>
        </div>
        <div className="c-sm-12 c-md-6 c-no-gutter c-xs-12">
          <div className="auth-box">
            <form action="">
              <div className="input-field__wrapper">
                <input
                  data-testid="email-input"
                  id="email"
                  required="required"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  title="Email is required"
                  className=""
                />
                <span className="input-field__helper">Email Address</span>
              </div>
              <div className="input-field__wrapper">
                <input
                  data-testid="password-input"
                  required="required"
                  name="password"
                  placeholder="Password"
                  title="Password is required"
                  type="password"
                  className=""
                />
                <span className="input-field__helper">Password</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={32}
                  height={32}
                  svg-inline=""
                  role="presentation"
                  focusable="false"
                  tabIndex={-1}
                  className="password-visibility"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
                
                <div className="m-t-15">
                  <span>
                    <a href="#" className="">
                      Forgot password?
                    </a>
                  </span>
                </div>
              </div>
              <div className="grid middle-sm">
                <div className="c-sm-6 c-no-gutter">
                  <span className="u-t-light-6">
                    New user?
                    <Link to="/signup"> Create account</Link>
                  </span>
                </div>
                <div className="c-sm-6 c-xs-12 grid c-no-gutter end-sm">
                  <button type="submit" className="align-end">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="auth-footer grid between-xs m-t-30">
            <span className="u-t-light-6">
              Trouble signing in?
              <a href="#"> Chat with us</a>
            </span>
            <div>
              <span>
                <a href="https://cowrywise.com/privacy" className="u-t-light-3">
                  &nbsp; Privacy &nbsp; |
                </a>
              </span>
              <span>
                <a href="https://cowrywise.com/terms" className="u-t-light-3">
                  &nbsp; Terms
                </a>
              </span>
            </div>
          </div>
          <div
            className="sweet-modal--small sweet-modal-overlay theme-dark sweet-modal-clickable"
            style={{ display: "none" }}
          >
            <div className="sweet-modal theme-light has-content is-mobile-fullscreen is-alert">
              <div className="sweet-box-actions"> </div>  
              <div className="sweet-content">
                   
                <div className="sweet-content-content">
                  <div className="confirmation-modal">
                    <div className="m-b-30">
                      <h5>Reactivate your account</h5>
                      <p className="m-t-15 u-t-light-6">
                        You made a request to delete this account. Logging in
                        means you want to cancel that request.
                      </p>
                      
                    </div>
                    <div className="grid end-xs u-t-right">
                      <button
                        type="button"
                        className="button button--no-height button--text m-r-20 primary"
                      >
                        go back
                      </button>
                      <button
                        type="button"
                        className="button button--no-height button--text"
                      >
                        Reactivate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;