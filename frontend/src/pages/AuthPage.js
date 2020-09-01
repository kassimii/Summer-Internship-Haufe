import React, { useEffect, useState } from "react";
import { signin } from "../redux/actions";
import { connect } from "react-redux";
import { useHttpClient } from "../hooks/http-hook";

function AuthPage(props) {
  const { user, signin } = props;
  const [jwtKey, setJwtKey] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJvY3BhdHJpY2lhQGdtYWlsLmNvbSIsImNsYWltcyI6WyJncm91cDEiLCJncm91cDMiXX0.f_xDaKgIxlRQ8K0f25jsI1Xn0WdeiGW4JQdFQJHzf6Q"
  );
  // {
  // 	"email": "bocpatricia@gmail.com",
  // 		"claims": ["group1", "group3"]
  // }
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    if (user && user.userInfo && !user.loading) {
      props.history.push("/clients");
    }
  }, [user, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    signin(jwtKey, sendRequest);
  };

  return (
    <div className="d-flex justify-content-center m-4">
      <form className="d-flex align-items-center" onSubmit={submitHandler}>
        {/* <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li> */}
        <div>
          <label className="m-2" htmlFor="jwtKey">
            Email
          </label>
          <input
            className="m-2"
            type="text"
            name="jwt"
            id="jwt"
            value={jwtKey}
            onChange={(e) => setJwtKey(e.target.value)}
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
