import axios from "axios"

export const submitContactForm = async (formData) => {
  // let endpoint = "https://formspree.io/f/mrgjajqp";
  let endpoint = "https://getform.io/f/dbb6b4cd-09d3-4dcf-9198-27c8d436bf56";

  return axios.post(endpoint, {
    name: formData.name.value,
    email: formData.email.value,
    message: formData.message.value
  })
  .then(response => {
    // console.log(response)
    return true;
  })
  .catch(error => {
    // console.log(error)
    return false;
  })
}