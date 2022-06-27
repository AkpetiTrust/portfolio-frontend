export const api = {
  url: "http://localhost:8000/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  token: localStorage.getItem("token"),

  async get(endpoint, authIsRequired = false) {
    let headers = { ...this.headers };

    if (authIsRequired) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    let res = await fetch(this.url + endpoint, { headers });

    let result = await res.json();

    return result;
  },

  async post(endpoint, { authIsRequired = false, body }) {
    let headers = { ...this.headers };
    body = JSON.stringify(body);

    if (authIsRequired) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    let res = await fetch(this.url + endpoint, {
      headers,
      body,
      method: "POST",
    });

    let result = await res.json();

    return result;
  },

  async delete(endpoint, authIsRequired = true) {
    let headers = { ...this.headers };

    if (authIsRequired) {
      headers["Authorization"] = `Bearer ${this.token}`;
    }

    let res = await fetch(this.url + endpoint, { headers, method: "DELETE" });

    let result = await res.json();

    return result;
  },
};
