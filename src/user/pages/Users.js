import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "kathleen",
      image:
        "https://unsplash.com/photos/woman-in-black-sleeveless-top-standing-beside-fence-NVi2yab124g",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};
export default Users;
