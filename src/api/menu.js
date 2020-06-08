import { API_VERSION, BASE_PATH } from "./config";

export function getMenusApi  ()  {
  const url = `${BASE_PATH}/${API_VERSION}/get-menus`;

  const params = {
    method: "get",
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
};

export function addMenuApi  (token, data)  {
    const url = `${BASE_PATH}/${API_VERSION}/add-menu`;
  
    const params = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
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
};

export function updateMenuApi  (token, menuId, data)  {
  const url = `${BASE_PATH}/${API_VERSION}/update-menu/${menuId}`;

  const params = {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
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
};

export function activateMenuApi  (token, menuId, data)  {
  const url = `${BASE_PATH}/${API_VERSION}/activate-menu/${menuId}`;

  const params = {
    method: "put",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
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
};

export function deleteMenuApi  (token, menuId)  {
  const url = `${BASE_PATH}/${API_VERSION}/delete-menu/${menuId}`;

  const params = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
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
};