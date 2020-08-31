import React, { useEffect, useState } from "react";
import { signin } from "../redux/actions";
import { connect } from "react-redux";
import { useHttpClient } from "../hooks/http-hook";

function AuthPage(props) {
  const { user, signin } = props;
  const [email, setEmail] = useState("bocpatricia@gmail.com");
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    if (user && user.userInfo) {
      props.history.push("/clients");
    }
  }, [user, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    signin(email, sendRequest);
  };

  return (
    <div className="d-flex justify-content-center m-4">
      <form className="d-flex align-items-center" onSubmit={submitHandler}>
        {/* <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li> */}
        <div>
          <label className="m-2" htmlFor="email">
            Email
          </label>
          <input
            className="m-2"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit" className="btn btn-primary m-2">
            Signin
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.userSignIn };
};

export default connect(mapStateToProps, {
  signin
})(AuthPage);
