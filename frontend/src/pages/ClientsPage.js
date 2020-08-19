import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import ClientFilterArea from "../components/ClientFilterArea";
import ClientsView from "../components/ClientsView";
import {getClients} from "../redux/actions/index";


function ClientsPage(props) {

  const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <div className="bg-light">
        <ClientFilterArea
          searchValue={searchField}
          onSearchChange={onSearchChange}
        />
        <br />
        <ClientsView />
      </div>
    </>
  );
}

export default ClientsPage;
