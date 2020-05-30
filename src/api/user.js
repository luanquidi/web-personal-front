import { API_VERSION, BASE_PATH } from "./config";

export function signUpApi  (data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-up`;

  const params = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
        if(result.user){
            return result;
        }
        return result;
    }).catch((err) => {
        return {
            ok: false,
            message: err.message
        };
    });
};

export function signInApi (data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-in`;

  const params = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
        return result;
    }).catch((err) => {
        return {
            ok: false,
            message: err.message
        };
    });
};

export function getUsersApi (token) {
  const url = `${BASE_PATH}/${API_VERSION}/users`;

  const params = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization":token
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
        return result;
    }).catch((err) => {
        return {
            ok: false,
            message: err.message
        };
    });
};

export function getActiveUsersApi (token, status) {
  const url = `${BASE_PATH}/${API_VERSION}/users-active?active=${status}`;

  const params = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization":token
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
        return result;
    }).catch((err) => {
        return {
            ok: false,
            message: err.message
        };
    });
};
