import { API_VERSION, BASE_PATH } from "./config";

export function getPostApi(urlPost) {
  const url = `${BASE_PATH}/${API_VERSION}/get-post/${urlPost}`;

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
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function getPostsApi(limit, page) {
  const url = `${BASE_PATH}/${API_VERSION}/get-posts?limit=${limit}&page=${page}`;

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
      return result;
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function addPostApi(token, data) {
  const url = `${BASE_PATH}/${API_VERSION}/add-post`;

  const params = {
    method: "post",
    body: JSON.stringify(data),
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

export function updatePostApi(token, id, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-post/${id}`;

  const params = {
    method: "put",
    body: JSON.stringify(data),
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

export function deletePostApi(token, id) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-post/${id}`;

  const params = {
    method: "delete",
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
