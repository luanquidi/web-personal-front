import React, { useState, useEffect } from "react";
import { getActiveUsersApi } from "../../../api/user";
import { getAccessToken } from "../../../api/auth";

// Components
import ListUsers from "../../../components/Admin/Users/ListUsers/ListUsers";

// Styles
import "./Users.scss";

const Users = () => {
  const [usersActive, setUsersActive] = useState([]);
  const [usersInactive, setUsersInactive] = useState([]);

  const token = getAccessToken();

  useEffect(() => {
    getActiveUsersApi(token, true).then((res) => {
      setUsersActive(res.users);
    });

    getActiveUsersApi(token, false).then((res) => {
      setUsersInactive(res.users);
    });
  }, [token]);

  return (
    <div className="users">
      <ListUsers usersActive={usersActive} usersInactive={usersInactive} />
    </div>
  );
};

export default Users;
