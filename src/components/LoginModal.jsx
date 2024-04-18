import React, { useState } from "react";
// import Modal from 'react-modal';
import { ImCancelCircle } from "react-icons/im";
import {Link} from "react-router-dom"
import "./Navbar.css";
import { Button, Modal } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';// this is common for toastify so i saved it in app.js
// import { CloseOutlined } from '@ant-design/icons';
function LoginModal({isOpen,closeModal}){
  //  const [isModalOpen, setIsModalOpen] = useState(false);
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const [userName,setUserName] = useState("")
  const[mobileNumber,setMobileNumber] = useState("")

  const sendOtp =(e)=>{
    e.preventDefault();

    if(userName===""){
      toast.error("Enter Your Username!")
    }
    
    else if(mobileNumber===""){
      toast.error("Enter Your Mobile Number!")
    }
    else if(mobileNumber.length !==10){
      toast.error("Enter Valid Mobile Number!")
    }

    else{
      toast.success("Login Done")
    }

   
  }
  const closeModalAndReset = () => {
        document.body.classList.remove("modal-open"); document.body.classList.remove("modal-open");
          closeModal();
        };
  const handleModalOpen = () => {
          document.body.classList.add("modal-open");
        };
  
   return(
      <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal  open={isOpen}  footer={null}//todisappear the cancel and ok button
        maskClosable={true} // This allows the modal to close when clicking the background
        onCancel={closeModalAndReset} // This ensures the same behavior for the close icon
        style={{
          
        
          height: '330px', // Let the height adjust based on content
         
          borderRadius:'25px',
          
        }}
        afterOpen={handleModalOpen}
        centered={true}
        className="custom-modal"
       >
        <form action="">
        <div className="border-b-2 border-solid border-black ">
       <h1 className="font-bold text-2xl mb-3 mt-1 ml-4 " >LogIn</h1>
       </div>
       <input type="text" name="username" placeholder="Username" className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4" onChange={(e)=>setUserName(e.target.value)}></input><br/> 
       <input type="number" name="mobilenumber" placeholder="Enter Mobile No" className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4 mb-6 " onChange={(e)=>setMobileNumber(e.target.value)}></input><br/> 
       <button className="px-4 py-2 bg-blue-900 mb-4 text-white font-medium rounded-lg ml-4" onClick={sendOtp}>Proceed</button><br/>
       <p><span className="ml-2 ">Create an Account? <Link to="/customer" className="text-blue-900 font-medium">SignUp</Link></span></p>
       </form>
       <ToastContainer />
      </Modal>
      </>
   )
}
// function LoginModal({isOpen,closeModal}) {

//    ////const [visible,setvisible] = useState(openModal)
//     const closeModalAndReset = () => {
//       ////setvisible(false);
//       closeModal();
//     };

//    ////  useEffect(() => {
//    ////    Modal.setAppElement('body');
//    ////  }, []);//appElement={document.getElementById('root')} give it in modal as attribute
// return(
//    ////onrequestcancel is used to close the modal(popup) where i touched in the body of the page.
// <>
 
// <Modal  isOpen={isOpen} onRequestClose={closeModalAndReset}  ariaHideApp={false} 
// style={{
//    overlay:{
//     background:'rgba(0, 0, 0, 0.662)'
//    },
//    content:{
//     width:'550px',
//     maxWidth: '435px',
//     height: '330px', // Let the height adjust based on content
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)', // Center the modal
//     borderRadius:'25px',
//     boxShadow:'0px 0px 10px black',
//     backgroundColor:'rgba(162, 237, 229, 0.732)',
    
//    },
  
// }}>

   
//    <button onClick={closeModalAndReset} className="absolute top-4 right-4" ><ImCancelCircle className="text-black text-2xl flex justify-right " /></button> 
//    <div className="border-b-2 border-solid border-black">
//    <h1 className="font-bold text-2xl mb-3 mt-1 ml-4 " >LogIn</h1>
//    </div>
//    <input type="text" placeholder="Username" className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4"></input><br/> 
//    <input type="number" placeholder="Enter Mobile No" className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4 mb-6"></input><br/> 
//    <button className="px-4 py-2 bg-blue-900 mb-4 text-white font-medium rounded-lg ml-4">Proceed</button><br/>
//    <input type="checkbox" className=" ml-6 text-3xl checked:ring-green-600" /><span className="ml-2 ">I agree to the <Link to="/terms&conditions" className="text-blue-900 font-medium">Terms & Conditions</Link></span>
// </Modal>
// </>
// )

// }

export default LoginModal;