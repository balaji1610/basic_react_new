function FetchiapiV1() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })

    .then((parsedData) => {
      //   const dataarray = parsedData[0].body;
      //   console.log(dataarray);
      console.log(parsedData);
    })

    .catch((err) => {
      alert(err + "OOps something went wrong..!");
    });

  return <div>Fetchi API V1</div>;
}

export default FetchiapiV1;
