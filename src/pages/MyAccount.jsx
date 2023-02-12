import React from "react";
import Header from "../components/Header";

const MyAccount = () => {
  return (
    <>
      <Header showHome={true} showMyBoards={true} showProfile={true} />
      <h1>My Account</h1>
    </>
  );
};

export default MyAccount;
