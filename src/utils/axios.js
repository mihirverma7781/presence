export const baseURL = process.env.REACT_APP_API_URL;
export const cdnBaseURL = process.env.CLOUDINARY_FILE_UPLOAD_URL;

export const setTokenLocal = (token) => {
  localStorage.setItem("token", token);
};

export const getTokenLocal = (token) => {
  return localStorage.getItem("token");
};