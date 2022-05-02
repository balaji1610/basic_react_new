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
      console.log(parsedData);
    })

    .catch((err) => {
      alert(err + "OOps something went wrong..!");
    });

  return <div>Hell</div>;
}

export default FetchiapiV1;
