import { API_VERSION, BASE_PATH } from "./config";

export function suscribeEmailApi(email) {
  const url = `${BASE_PATH}/${API_VERSION}/suscribe-email/${email}`;

  const params = {
    method: "post",
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
