import React from "react";
import UserDetail from "./UserDetail";

export default function App() {
  const users = [
    {
      id: 1,
      name: "reuben",
      age: 17,
      contact: "reu@gmail.com",
      weight: "70kg",
    },
    {
      id: 2,
      name: "John",
      age: 25,
      contact: "john@example.com",
      weight: "75kg",
    },
    {
      id: 3,
      name: "paul",
      age: 30,
      contact: "paul@example.com",
      weight: "60kg",
    },
  ];

  return (
    <div className="profiles">
      {users.map((user) => (
        <UserDetail key={users.id} user={user} />
      ))}
    </div>
  );
}