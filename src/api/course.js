import { API_VERSION, BASE_PATH } from "./config";

export function getCoursesApi() {
  const url = `${BASE_PATH}/${API_VERSION}/get-courses`;

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

export function deleteCourseApi(token, idCourse) {
  const url = `${BASE_PATH}/${API_VERSION}/delete-course/${idCourse}`;

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

export function createCourseApi(token, data) {
  const url = `${BASE_PATH}/${API_VERSION}/create-course`;

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

export function updateCourseApi(token, idcourse, data) {
  const url = `${BASE_PATH}/${API_VERSION}/update-course/${idcourse}`;

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

export function getCourseUdemyApi(id) {
  const url = `https://www.udemy.com/api-2.0/courses/${id}/?fields[course]=title,headline,url,price,image_480x270`;

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
      if(result.detail){
        return {
          ok: false
        };
      }
      return {
        ok: true,
        course: result
      };
    })
    .catch((err) => {
      return {
        ok: false,
        message: err
      };
    });
}
