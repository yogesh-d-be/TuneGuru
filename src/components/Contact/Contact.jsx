import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";


import "react-toastify/dist/ReactToastify.css";
import { StoreContext } from "../StoreContext";

import { API_URL } from "../../service/Helper";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import '../Contact/Contact.css'

const ContactForm = () => {
  const {profileUserName,profileUserEmail} = useContext(StoreContext);
  const contactFileRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const [contactUser, setContactUser] = useState({
    name: profileUserName||"",
    emailId: profileUserEmail||"",
    mobileNumber:"",
    message:"",
    contactFile:null,
  })

 const [editName,setEditName] = useState(false)
 const [editEmail,setEditEmail] = useState(false)
 const [showPopup, setShowPopup] = useState(false);
 
  const handleOnChange = (e) =>{
    setContactUser((prev)=>({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    
    if(file && validTypes.includes(file.type)){
      setContactUser((prev)=>({
        ...prev, contactFile:file
      }))

      setFileName(file.name)
    }
    else{
      toast.error("Invalid file type")
      setFileName("")
      contactFileRef.current.value = ""; // Clear the file input if invalid
    }
  };

  const handleContactFile = () =>{
    contactFileRef.current.click()
  }

  const clearContactFile = () =>{
    setContactUser((prev)=>({
      ...prev, contactFile:null
    }));
    setFileName("")
      contactFileRef.current.value = ""; // Clear the file input if invalid
      // Disable file input temporarily after clearing
    contactFileRef.current.setAttribute("disabled", true);
    setTimeout(() => {
      contactFileRef.current.removeAttribute("disabled");
    }, 100);
  }
  
let config = {
  headers:{
    Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
    'Content-Type': 'multipart/form-data'
  }
}
  const handleSubmit = async(event) =>{
    event.preventDefault();
    const {name,emailId,mobileNumber,message, contactFile} = contactUser
    // if(!name&&!emailId&&!mobileNumber&&!message){
    //   toast.error("Enter All Contact details")
    //   return;
    // }
  if(name === ""){
      toast.error("Enter Your FullName!");
      return;
    }
    else if(emailId === ""){
      toast.error("Enter Your Email!");
      return;
    }
    else if(!emailId.includes("@")){
      toast.error("Enter Valid Email!");
      return;
    }
    else if(mobileNumber === ""){
      toast.error("Enter Your Mobile Number!");
      return;
    }
    else if(mobileNumber.length!==10){
      toast.error("Enter valid Mobile Number!");
      return;
    }
    else if(message === ""){
      toast.error("Enter Message!");
      return;
    }

    try {

      const formData = new FormData();
      formData.append("name",name);
      formData.append("emailId",emailId);
      formData.append("mobileNumber",mobileNumber)
      formData.append("message",message);
      if(contactFile){
        formData.append("contactFile",contactFile);
      }

      const response = await axios.post(`${API_URL}/api/contact/form`,contactUser,config);
      if (response.data.success) {
        toast.success(response.data.message);
        setContactUser({
          name: profileUserName||"",
          emailId: profileUserEmail||"",
          mobileNumber:"",
          message:"",
          contactFile: null
        })
        setEditEmail(false)
        setEditName(false)
        setFileName("")
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        // Server-side errors
        toast.error(error.response.data.message || "Something went wrong on the server");
      } else if (error.request) {
        // Network errors
        toast.error("Network error, please try again later");
      } else {
        // Other errors
        toast.error("An unexpected error occurred");
      }
    }
  };
  

  const handleChat = async() => {
    const { name, emailId, mobileNumber } = contactUser;
  
    if (name === "") {
      toast.error("Enter Your FullName!");
      return;
    } else if (emailId === "") {
      toast.error("Enter Your Email!");
      return;
    } else if (!emailId.includes("@")) {
      toast.error("Enter Valid Email!");
      return;
    }
   
  try{
    const {value: whatsappNumber} = await Swal.fire({
      title: 'Enter Whatsapp Number',
      input:'text',
      inputValue: mobileNumber,
      showCancelButton:true,
      confirmButtonText: 'OK',
      cancelButtonText:'Cancel', customClass: {
        title: 'swal-title'
      } ,
      inputValidator: (value) =>{
        if(!value){
          return "Enter Mobile Number!";
        }
        else if(value.length !== 10){
          return "Enter Valid Mobile Number!"
        }
        return null;
      }
    });

    if(whatsappNumber){
      const result = await Swal.fire({
         title: `Your Whatsapp Number is ${whatsappNumber}`,
         showCancelButton: true,
         confirmButtonText: "Confirm",
         cancelButtonText:"Edit",
         customClass: {
          title: 'swal-title'
        } 
      });

      if(result.isConfirmed){
        const companyNumber = '6374694062';
        const message = `I need your assistance.\nMy Name is ${name}.\nMy Email Address: ${emailId}.\nMy Contact Number: ${whatsappNumber}`;
        const whatsappUrl = `https://wa.me/${companyNumber}?text=${encodeURIComponent(message)}`;


        window.open(whatsappUrl,'_blank');
      }

      else if(result.dismiss === Swal.DismissReason.cancel){
        handleChat(); //call the function again after click edit button
      }

    }    
  }
  catch(error){
    toast.error("Something went wrong, check after sometime!")
  }
    
  };
  

 useEffect(()=>{
  const interval = setInterval(()=>{
    setShowPopup((prevPopup)=>!prevPopup);
  },5000)
  return () => clearInterval(interval)
 },[])

  return (
    <>
      <div className="overflow-hidden">
        <div className="flex de:flex-col  ta:flex-col mo:flex-col flex-wrap justify-center">
          <div className="w-[40%] flex flex-col justify-center pl-12 mt-12 des_search:pl-8 de:w-full ta:w-full mo:w-full de:pl-0 de:ml-12 ta:pl-12 ta:pr-12 mo:pl-12 mo:pr-12 "><h1 className="font-bold text-3xl mb-4 mo:text-[23px]">Let's Get In <span className="font-bold text-blue-500">Touch!</span></h1>
              <p className="">Have a question or need assistance? Reach out to us via email, phone, or the contact form below. </p><p>We're eager to assist you.</p>
              <p className="text-blue-900">Nice hearing from you!</p><img src={require('../../assests/images/Personal_email.png')} alt="email" className="w-[500px]" /></div>
          <div className="w-[60%] flex flex-col justify-center items-center de:w-full ta:w-full mo:w-full">
            <form onSubmit={handleSubmit} className=" mt-2 w-[70%] rounded-2xl des_search:w-[80%] de:w-[80%] ta:w-[80%] mo:w-[83%] mo:px-6 mo:mx-12 bg-blue-200 px-12 py-4">
              
<div className="flex flex-col gap-2 flex-wrap mt-6">
  
<label htmlFor="name" className="font-semibold">Full Name</label>
<div className="relative">
              <input type="text" name="name" id="name" value={contactUser.name} onChange={handleOnChange} readOnly={!editName} className={`mb-4 rounded-2xl border border-blue-700 w-full ${editName?"mb-0":""}`}/>{editName?<button type="button" onClick={() => setEditName(!editName)} className="text-blue-500 absolute right-4 top-2 ">Save</button>:<button type="button" onClick={() => setEditName(!editName)} className="text-blue-500 absolute right-4 top-2 ">Edit</button>} 
              {editName&&<p className="mb-3 text-[13px] ml-2 text-red-700">Now you can edit the Full Name</p>}
              </div> </div>
              <div className="flex flex-col gap-2">
              <label htmlFor="emailId" className={`font-semibold relative`}>Email</label>
              <div className="relative">
              <input type="email" name="emailId" id="emailId" value={contactUser.emailId} onChange={handleOnChange} readOnly={!editEmail} className={`mb-4 rounded-2xl border border-blue-700 w-full ${editEmail?"mb-0":""}`}/>{editEmail?<button type="button" onClick={() => setEditEmail(!editEmail)} className="text-blue-500 absolute right-4 top-2 ">Save</button>:<button type="button" onClick={() => setEditEmail(!editEmail)} className="text-blue-500 absolute right-4 top-2 ">Edit</button>} 
              {editEmail&&<p className="mb-3 text-[13px] ml-2 text-red-700">Now you can edit the Email</p>}
              </div> </div>
              <div className="flex flex-col gap-2">
              <label htmlFor="mobileNumber" className="font-semibold">Mobile Number (Whatsapp Number)</label>
              <input type="number" name="mobileNumber" id="mobileNumber" value={contactUser.mobileNumber} onChange={handleOnChange} className="mb-4 rounded-2xl border border-blue-700"/>
              </div>
              <div className="flex flex-col gap-2">
              <label htmlFor="message" className=" font-semibold">Message</label>
              <textarea name="message" id="message" value={contactUser.message} onChange={handleOnChange} cols="35" rows="5" className="mb-4 rounded-2xl border border-blue-700"></textarea>
              </div>
              <div onClick={handleContactFile} className="flex items-center gap-2 mb-6 mt-2 " >
              <img src={require('../../assests/Icons/upload-file.png')} alt="upload" className="w-8 cursor-pointer" id="contactFile" /> <div className="flex flex-col"><div className="flex"><p id="contactFile" className="cursor-pointer"  >Upload File (Optional) </p>{fileName?<button onClick={clearContactFile} className="ml-2 py-1 px-2 rounded-ld font-bold bg-gray-200">x</button>:""}</div><p className="text-[12px]">{fileName || "Choose file .jpg, .jpeg, .png, .doc, .pdf, .docx not more than 5MB"}</p></div>
              
              </div>
              <input type="file" ref={contactFileRef} value=""  name="contactFile" id="contactFile"  onChange={handleFileChange}  className="mb-4 rounded-2xl border border-blue-700" hidden/>
              <button type="submit" value="" className="px-4 py-2 bg-blue-800 text-white rounded-xl mb-4">Submit</button>
             
            </form>
            <div className="sticky z-100 w-full  flex  mt-2  de:mt-24 ta:mt-24 mo:mt-24">
            <img src={require('../../assests/Icons/whatsapp.png')} alt="whatsapp" onClick={handleChat} className="cursor-pointer w-14  absolute right-3 bottom-0 mb-4"/>
          
          {
            showPopup&&(
              <div className="popup-animation absolute bottom-16 right-16 bg-white border border-gray-300 p-4 rounded shadow-lg  de:w-[145px] ta:w-[145px] mo:w-[145px]">
              <div className="typing-animation">Chat with expert</div>
  
            </div>
            )
          }
         </div>
          </div>
          
        </div>
        
      </div>
      {/* <div className="w-full flex justify-end mt-6 des:hidden pr-4">
            <img src={require('../../assests/Icons/whatsapp.png')} alt="whatsapp" onClick={handleChat} className="cursor-pointer w-14  mb-4 "/>
          </div> */}
         
    </>
  )
       
}
export default ContactForm;