const Services = {
  getApi: () => {
    const response = fetch(`https://mockjson-e650.onrender.com/contacts`)
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
    const response = fetch(
      `https://mockjson-e650.onrender.com/contacts`,
      payloadData
    )
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
    const response = fetch(
      `https://mockjson-e650.onrender.com/contacts/${payload}`,
      {
        method: "DELETE",
      }
    )
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
    const response = fetch(
      `https://mockjson-e650.onrender.com/contacts/${id}`,
      payloadData
    )
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
    const response = fetch(
      `https://mockjson-e650.onrender.com/contacts/?q=${payload}`
    )
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
