import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [images, setimages] = useState([]);
  const handleImage = (e) => {
    let files = [];
    for (let items of e.target.files) {
      files.push(items);
    }
    setimages(files);
  };
  const uploadData = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };
    const fileData = new FormData();
    for (let imageData of images) {
      console.log(imageData);

      fileData.append("userimg", imageData);
    }
    console.log(fileData);

    const respo = await axios
      .post("http://localhost:2001/api/uploadImages", fileData, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // const { data } = await axios.post(
    //   "http://localhost:2001/api/uploadImage",
    //   fileData,
    //   {
    //     params: { image },
    //   },

    //   { headers: { "Content-Type": "multipart/form-data" } }
    // );
    // if (data.success) {
    // } else {
    //   toast.error(data.error);
    // }
  };

  return (
    <>
      <div className="image">
        <h2>Upload Images</h2>
        <input onChange={handleImage} type="file" multiple={true} />
        <button onClick={uploadData}>Upload</button>
      </div>
    </>
  );
}

export default App;
