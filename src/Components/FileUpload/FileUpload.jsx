import React, { useState } from 'react'
import DragAndDrop from '../DragAndDrop/DragAndDrop'
import Carousel from '../Carousal/Carousal';
import {Cloudinary} from "@cloudinary/url-gen";
import { uploadToCloudinary } from '../../Utils/cloudinary';
import "./fileUpload.css"
const FileUpload = () => {

  const [imageList, setImageList] = useState([]);
  const cld = new Cloudinary({cloud: {cloudName: 'do0dwcmue'}});

  const defaultImage = "https://accordelectrotechnics.in/img/product/no-preview/no-preview.png"
  const onFileDrop = (files) => {
   setImageList([...imageList, ...files])
    console.log('file dropped')
  }
  const onDelete = async(files) => {

     setImageList(files)
     console.log('file dropped')
   }
   const onSave = async(file) => {
     try{
       await uploadToCloudinary(file.data);
       alert("Image uploaded successfully")
     }catch(err){
       console.log(err);
       alert("Unable to upload image");
     }
   }
  return (
    <span className='upload-image'>
    <Carousel imageList={imageList} onDelete={onDelete} defaultImage={defaultImage} onSave={onSave} />
    <DragAndDrop title='Drop any file' onFileDrop={onFileDrop} />
    </span>
  )
}

export default FileUpload