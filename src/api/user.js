import { API_VERSION, BASE_PATH } from "./config";

export function signUpApi(data) {
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
      if (result.user) {
        return result;
      }
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function signUpAdminApi(token, data) {
  const url = `${BASE_PATH}/${API_VERSION}/sign-up-admin`;

  const params = {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      if (result.user) {
        return result;
      }
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function signInApi(data) {
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
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function getUsersApi(token) {
  const url = `${BASE_PATH}/${API_VERSION}/users`;

  const params = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function getActiveUsersApi(token, status) {
  const url = `${BASE_PATH}/${API_VERSION}/users-active?active=${status}`;

  const params = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function uploadAvatarApi(token, avatar, userId) {
  const url = `${BASE_PATH}/${API_VERSION}/upload-avatar/${userId}`;

  const formData = new FormData();
  formData.append("avatar", avatar, avatar.name);

  const params = {
    method: "PUT",
    body: formData,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function getAvatarApi(avatarName) {
  const url = `${BASE_PATH}/${API_VERSION}/get-avatar/${avatarName}`;

  return fetch(url)
    .then((res) => {
      return res.url;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function updateUserApi(token, user, userId) {
  const url = `${BASE_PATH}/${API_VERSION}/update-user/${userId}`;

  const params = {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function activeUserApi(token, userId, status) {
  const url = `${BASE_PATH}/${API_VERSION}/activate-user/${userId}`;

  const params = {
    method: "PUT",
    body: JSON.stringify({
      active: status
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function deleteUserApi(token, userId) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-user/${userId}`;

  const params = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };

  return fetch(url, params)
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}