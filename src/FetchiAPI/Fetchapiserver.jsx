import { useState, useEffect } from "react";
import InputComp from "../Reactdoc/Topics/Adding Interactivity/07/Copyingobjects/Consinput/inputComp";
import Services from "./Services";
export default function Fetchapiserver() {
  //AddModule

  const [dastArray, setDataArray] = useState([]);

  const [datavalue, setdatavalues] = useState({
    FirstName: " ",
    LastName: " ",
  });

  const getData = async () => {
    let getApiRes = await Services.getApi();
    let getUserDetails = getApiRes.map((item) => item);
    setDataArray(getUserDetails);
  };

  useEffect(() => {
    getData();
  });

  //Add Moudule
  const AddModule = (function () {
    const handledAddchange = (e) => {
      setdatavalues((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

      console.log(datavalue, "datavalue");
    };

    const submitbtn = async (e) => {
      e.preventDefault();
      let res = await Services.postApi(datavalue);

      if (res.FirstName === datavalue.FirstName) {
        alert("Success");
      } else {
        alert("Error");
      }

      //   setDataArray((dastArray) => [...dastArray, datavalue]);
    };
    return { handledAddchange, submitbtn };
  })();

  const { handledAddchange, submitbtn } = AddModule;
  console.log(dastArray, "dastArray");
  return (
    <div>
      <h1>Simple Crud</h1>

      <form onSubmit={submitbtn}>
        <label>Fist Name</label>
        <InputComp
          type="text"
          placeholder="Fist Name"
          onChange={handledAddchange}
          value={datavalue.FirstName}
          name="FirstName"
        />

        <label>Last Name</label>
        <InputComp
          type="text"
          placeholder="Last Name"
          onChange={handledAddchange}
          value={datavalue.LastName}
          name="LastName"
        />
        <button type="submit">submit</button>
      </form>

      <div>
        <table class="table table-primary table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">EDIT</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {dastArray.map((item) => (
              <tr class="table-secondary">
                <th scope="row">{item.id}</th>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>EDIT</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
