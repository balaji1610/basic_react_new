import { useState, useEffect } from "react";
import InputComp from "../Reactdoc/Topics/Adding Interactivity/07/Copyingobjects/Consinput/inputComp";
import Services from "./Services";
export default function Fetchapiserver() {
  //AddModule

  const [dastArray, setDataArray] = useState([]);

  const [datavalue, setdatavalues] = useState({
    firstName: " ",
    lastName: " ",
  });
  const [callUseEffect, setCallUseEffect] = useState(0);
  //   const getData = async () => {
  //     let getApiRes = await Services.getApi();
  //     let getUserDetails = getApiRes.map((item) => item);
  //     setDataArray(getUserDetails);
  //   };

  useEffect(() => {
    const getData = async () => {
      let getApiRes = await Services.getApi();
      let getUserDetails = getApiRes.map((item) => item);
      setDataArray(getUserDetails);
    };
    getData();
  }, [callUseEffect]);

  // console.log(callUseEffect,"callUseEffect")

  // setTimeout(function () {
  //   getData();
  // }, 1000);

  //Add Moudule
  const AddModule = (function () {
    const handledAddchange = (e) => {
      setdatavalues((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const submitbtn = async (e) => {
      e.preventDefault();
      let res = await Services.postApi(datavalue);

      if (res.firstName === datavalue.firstName) {
        alert("Success");
        setCallUseEffect(callUseEffect + 1);
      } else {
        alert("Error");
      }
    };

    return { handledAddchange, submitbtn };
  })();

  const { handledAddchange, submitbtn } = AddModule;

  //DeleteModule

  const DeleteModule = (function () {
    const handleDeleteClick = async (getid) => {
      //   const deleteItem = dastArray.filter((elm, index) => {
      //     return index !== getid;
      //   });

      //   console.log(deleteItem, "deleteItem");

      const deleteapiitems = await Services.deleteApi(getid);
      setCallUseEffect(callUseEffect + 1);
      console.log(deleteapiitems, "deleteitems");
    };
    return { handleDeleteClick };
  })();

  const { handleDeleteClick } = DeleteModule;

  return (
    <div>
      <h1>Simple Crud</h1>

      <form onSubmit={submitbtn}>
        <label>Fist Name</label>
        <InputComp
          type="text"
          placeholder="Fist Name"
          onChange={handledAddchange}
          value={datavalue.firstName}
          name="firstName"
        />

        <label>Last Name</label>
        <InputComp
          type="text"
          placeholder="Last Name"
          onChange={handledAddchange}
          value={datavalue.lastName}
          name="lastName"
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
            {dastArray.map((item, index) => (
              <tr class="table-secondary">
                <th scope="row">{index + 1}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>
                  <button>EDIT</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteClick(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
