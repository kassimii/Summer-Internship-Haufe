import React from "react";

function LoginPage(props) {
  return (
    <div className="text-center">
      <div className="d-flex w-50 vh-100 mx-auto my-auto flex-column justify-content-center">
        <div className="jumbotron">
          <h1 className="mb-4">Log in</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <button type="button" className="btn btn-info mt-3">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
