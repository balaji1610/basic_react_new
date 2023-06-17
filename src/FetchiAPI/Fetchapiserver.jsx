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

  useEffect(() => {
    const getData = async () => {
      let getApiRes = await Services.getApi();
      let getUserDetails = getApiRes.map((item) => item);
      setDataArray(getUserDetails);
    };
    getData();
  }, [callUseEffect]);

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
      const deleteapiitems = await Services.deleteApi(getid);
      setCallUseEffect(callUseEffect + 1);
      console.log(deleteapiitems, "deleteitems");
    };
    return { handleDeleteClick };
  })();

  const { handleDeleteClick } = DeleteModule;

  //Edit
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Editlayout, setEditLayout] = useState(false);
  const [currentId, setCurrentId] = useState();

  const EditMoudle = (function () {
    const handleEditClick = (id) => {
      setEditLayout(true);
      setCurrentId(id);
      alert(id);
      const [employee] = dastArray.filter((el) => el.id === id);
      setFname(employee.firstName);
      setLname(employee.lastName);
    };

    const handleCancelClick = () => {
      setEditLayout(false);
    };

    const handleEditChange = (e) => {
      setFname(e.target.value);
    };

    const handleLsEditChange = (e) => {
      setLname(e.target.value);
    };

    const list = {
      firstName: fname,
      lastName: lname,
    };
    console.log(list, "list");

    const updatebtn = async (e) => {
      e.preventDefault();
      alert("UPDATE");
      let updateapi = await Services.editApi(currentId, list);
      setCallUseEffect(callUseEffect + 1);
      console.log(updateapi, "updateapi");
    };

    return {
      handleEditClick,
      handleCancelClick,
      handleEditChange,
      handleLsEditChange,
      updatebtn,
    };
  })();
  const {
    handleEditClick,
    handleCancelClick,
    handleEditChange,
    handleLsEditChange,
    updatebtn,
  } = EditMoudle;

  const [serachArray, setserachArray] = useState([]);
  const [serach, setSearch] = useState("");

  const SearchMoudle = (function () {
    const changesearchText = async (e) => {
      setSearch(e.target.value);

      const SearchAPI = await Services.search(serach);
      setserachArray(SearchAPI);
    };
    return { changesearchText };
  })();
  const { changesearchText } = SearchMoudle;

  return (
    <div>
      <h1>Simple Crud</h1>
      Search:
      <InputComp
        type="search"
        placeholder="Search"
        onChange={changesearchText}
      />
      <h1>{serach}</h1>
      <form>
        <label>Fist Name</label>
        <InputComp
          type="text"
          placeholder="Fist Name"
          onChange={Editlayout ? handleEditChange : handledAddchange}
          value={Editlayout ? fname : datavalue.firstName}
          name="firstName"
        />

        <label>Last Name</label>
        <InputComp
          type="text"
          placeholder="Last Name"
          onChange={Editlayout ? handleLsEditChange : handledAddchange}
          value={Editlayout ? lname : datavalue.lastName}
          name="lastName"
        />

        {Editlayout ? (
          <>
            {" "}
            <button onClick={handleCancelClick}>Cancel</button>
            <button onClick={updatebtn}>Update</button>
          </>
        ) : (
          <>
            {" "}
            <button onClick={submitbtn}>submit</button>
          </>
        )}
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
            {serach.length >= 1 ? (
              <>
                {serachArray.map((item, index) => (
                  <tr class="table-secondary">
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                      <button onClick={() => handleEditClick(item.id)}>
                        EDIT
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteClick(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {dastArray.map((item, index) => (
                  <tr class="table-secondary">
                    <th scope="row">{index + 1}</th>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>
                      <button onClick={() => handleEditClick(item.id)}>
                        EDIT
                      </button>
                    </td>
                    <td>
                      <button onClick={() => handleDeleteClick(item.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
