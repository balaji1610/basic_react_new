const BASE_URL = "https://full-ancient-cornet.glitch.me/contacts";

const Services = {
  getApi: () => {
    const response = fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  postApi: (payload) => {
    const payloadData = {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = fetch(`${BASE_URL}`, payloadData)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  deleteApi: (payload) => {
    const response = fetch(`${BASE_URL}/${payload}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  editApi: (id, payload) => {
    // console.log(payload);
    const payloadData = {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = fetch(`${BASE_URL}/${id}`, payloadData)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },

  search: (payload) => {
    const response = fetch(`${BASE_URL}?q=${payload}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        return error;
      });
    return response;
  },
};
export default Services;
