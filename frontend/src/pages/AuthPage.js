import React from "react";
import { storeToken } from "../redux/actions";
import { connect } from "react-redux";

const jwt = require("jsonwebtoken");

const user = {
  name: "user1",
  groups: ["group1", "group2"],
};
const ACCESS_TOKEN_SECRET =
  "ced812925907d148d88a4dc774f2798943903d0bb8e8f1117cb01f588863d42a1d2fdaf55032fcc7cd686b02324327b6f12ced461b1072b3c6f4732ce1403d3d";

function AuthPage({ storeToken, token }) {
  const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
  storeToken(accessToken);
  return <div>Auth</div>;
}

const mapStateToProps = (state) => {
  return { token: state.token };
};

export default connect(mapStateToProps, {
  storeToken,
})(AuthPage);