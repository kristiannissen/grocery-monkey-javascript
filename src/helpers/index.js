/**
 * @param {string} URI - server side endpoint
 * @param {string} method - request method, GET, POST, PUT, DELETE
 * @param {object} data - JS Object to post
 * @param {string} token - JWT token
 */
const rH = new Headers();

class RequestError extends Error {
  constructor(message, status, text) {
    super(message);
    this.name = "Request Error";
  }
}

const helpFetch = async (URI, method, data, token) => {
  rH.append("Content-Type", "application/json");
  if (token !== "") {
    rH.append("Authorization", `Bearer ${token}`);
  }

  return fetch(`${process.env.REACT_APP_DOMAIN}/${URI}`, {
    method: method,
    body: JSON.stringify(data),
    mode: "cors",
    headers: rH,
  }).then((resp) => {
    if (resp.status >= 200 && resp.status <= 299) {
      return resp.json();
    }
    throw new RequestError(resp.statusText);
  });
};

export { helpFetch };
