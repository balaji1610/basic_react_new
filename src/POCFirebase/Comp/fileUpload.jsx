import { useState } from "react";
import storage from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
function App() {
  // State to store uploaded file
  const [file, setFile] = useState(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state

  const [image, setImage] = useState([]);
  function handleChange(event) {
    setFile(event.target.files[0]);
  }
  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }
    const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImage((state) => state.concat(url));

          console.log(url);
        });
      }
    );
  };
  console.log(image, "image");

  return (
    <div>
      <input type="file" onChange={handleChange} accept="/image/*" />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} "% done"</p> 
      {/* <section>
        <br />
        <br />
        {image.map((val) => (
          <img src={val} alt="example" />
        ))}
      </section> */}
      <section>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="10000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://firebase.google.com/images/social.png"
                class="d-block w-100"
                width="500"
                height="350"
                alt="01"
              />
            </div>
            <div>
              {image.map((val) => (
                <div class="carousel-item">
                  <img
                    src={val}
                    class="d-block w-100"
                    width="500"
                    height="350"
                    alt="mappingImage"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </div>
  );
}
export default App;
