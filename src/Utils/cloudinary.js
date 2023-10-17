const UPLOAD_PRESET = "a9lnbalt";
const CLOUD_NAME = "dt6wxntgi";
const API_KEY = "794878999514871";

export const uploadToCloudinary = async (fileData) => {
  const formData = new FormData();
  formData.append("file", fileData);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("cloud_name", CLOUD_NAME);
  formData.append("api_key", API_KEY);
  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/c-7ae0a7180c68eb0a39c4cf0bfd861f/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
