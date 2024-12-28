import React from "react";
import UserForm from "./UserForm.js";
import UserTable from "./UsersTable.js";

const users = [
  {
    id: 1,
    name: "Light",
  },
  {
    id: 2,
    name: "Fan",
  },
];

export default function Add() {
  return (
    <div>
      <UserForm />
      <UserTable rows={users}/>
    </div>
  );
}
