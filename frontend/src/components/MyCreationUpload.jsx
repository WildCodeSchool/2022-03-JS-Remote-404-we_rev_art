/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
/* import download from "../images/download.png"; */

function MyCreationUpload() {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("myfile", data.file[0]);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-shadow
      .then((data) => setImage(data.url));
    /* .catch(err) => console.log(err)); */
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("file")} type="file" />
        <button className="btn_background" type="submit">
          UPLOAD YOUR PHOTO
        </button>
      </form>
      <img src={image} alt="En attente d'une image" className="downlaoding" />
    </div>
  );
}

export default MyCreationUpload;
