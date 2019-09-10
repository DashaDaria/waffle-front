import React from "react";
import "./index.css";

const Login = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Login</h1>
      <hr className="my-4"></hr>
      <form>
        <div class="form-row align-items-center">
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              class="form-control mb-2"
              id="inlineFormInput"
              placeholder="Jane Doe"
            />
          </div>
          <div class="col-auto">
            <label class="sr-only" for="inlineFormInputGroup">
              Password
            </label>
            <div class="input-group mb-2">
              <input
                placeholder="Password"
                type="password"
                id="inputPassword6"
                class="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
              />
            </div>
          </div>
          <div class="col-auto">
            <div class="form-check mb-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label class="form-check-label" for="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
