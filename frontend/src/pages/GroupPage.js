import React from "react";

export default function GroupPage(props) {
  const id = props.match.params.groupId;
  return <div>GroupPage with id {id}</div>;
}
