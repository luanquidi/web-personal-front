import jwtDecode from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constants";
import { BASE_PATH, API_VERSION } from "./config";

export function getAccessToken() {
  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken || accessToken === "null") {
    return null;
  } else if (accessToken) {
    return checkTokenExpire(accessToken) ? null : accessToken;
  }
}

export function getRefreshToken() {
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);

  if (!refreshToken || refreshToken === "null") {
    return null;
  } else if (refreshToken) {
    return checkTokenExpire(refreshToken) ? null : refreshToken;
  }
}

export function refreshAccessToken(refreshToken) {
  const url = `${BASE_PATH}/${API_VERSION}/refresh-access-token`;

  const bodyObj = {
    refreshToken: refreshToken,
  };
  const params = {
    method: "post",
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, params)
    .then((res) => {
      if (res.status !== 200) return null;
      return res.json();
    })
    .then((result) => {
      if (!result) {
        logout();
      } else {
        const { accessToken, refreshToken } = result;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
      }
    })
    .catch((err) => {
      return {
        ok: false,
        message: err.message,
      };
    });
}

export function logout() {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
}

function checkTokenExpire(token) {
  const seconds = 60;
  const metaToken = jwtDecode(token);
  const { exp } = metaToken;

  const now = (Date.now() + seconds) / 1000;

  return now > exp ? true : false;
}
