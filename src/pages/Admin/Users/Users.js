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
  const [reloadUsers, setReloadUsers] = useState(false);

  const token = getAccessToken();

  useEffect(() => {
    getActiveUsersApi(token, true).then((res) => {
      setUsersActive(res.users);
    });

    getActiveUsersApi(token, false).then((res) => {
      setUsersInactive(res.users);
    });
    setReloadUsers(false);
  }, [token, reloadUsers]);

  return (
    <div className="users">
      <ListUsers usersActive={usersActive} usersInactive={usersInactive} setReloadUsers={setReloadUsers} />
    </div>
  );
};

export default Users;
