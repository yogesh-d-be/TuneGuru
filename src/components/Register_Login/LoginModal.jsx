import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Home/Navbar.css";
import { Modal, Spin } from 'antd';
import {  toast } from 'react-toastify';
import { sendOtpFunction } from "../../service/Api";
import OtpModal from "./OtpModal";



function LoginModal({ isOpen, closeModal}) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [spiner,setSpiner] = useState(false);

    const closeModalAndReset = () => {
        closeModal();
        setUserName("");
        setEmail("");
        setLoginSuccess(false);
        setShowOtpModal(false);
    };

    const openOtpModal = () => {
        setShowOtpModal(true);
    };

    useEffect(()=>{
        if(isOpen){
          document.body.style.overflow = "hidden"
        }
        else{
          document.body.style.overflow = "visible"
        }
        // Revert overflow style when the component is unmounted
        return () => {
          document.body.style.overflow = "visible";
      };
      },[isOpen])

    const sendOtp = async (e) => {
        e.preventDefault();
        if (userName === "") {
            toast.error("Enter Your Username!");
        } else if (email === "") {
            toast.error("Enter Your Email");
        } else if (!email.includes("@")) {
            toast.error("Enter Your Valid Email");
        } else {
            setSpiner(true)
            const data = { username: userName, email: email };
            try {
                const response = await sendOtpFunction(data);
                if (response.status === 200) {
                    setSpiner(false)
                    setLoginSuccess(true);
                    openOtpModal();
                } else {
                    toast.error(response.response.data.error);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return (
        <>
            <Modal
                open={!loginSuccess && isOpen }
                footer={null}
                maskClosable={true}
                onCancel={closeModalAndReset}
                style={{ height: "330px", borderRadius: "25px" }}
                centered={true}
                className="custom-modal"
            >
                <form action="">
                    <div className="border-b-2 border-solid border-black">
                        <h1 className="font-bold text-2xl mb-3 mt-1 ml-4">LogIn</h1>
                    </div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <br />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4 mb-6 "
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <button
    className="px-4 py-2 bg-blue-900 mb-4 text-white font-medium rounded-lg ml-4"
    onClick={sendOtp}
>Proceed
    {spiner ? <Spin /> : ""}
</button>
                    <br />
                    <p>
                        <span className="ml-2">
                            Create an Account? <Link to="/customer/register" className="text-blue-900 font-medium">SignUp</Link>
                        </span>
                    </p>
                </form>
                {/* <ToastContainer /> */}
            </Modal>
            {showOtpModal && <OtpModal isOpenOtp={showOtpModal} closeOtpModal={() => setShowOtpModal(false)} email={email} />}
        </>
    );
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


// import React, { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';

// function LoginModal({ isOpen, closeModal }) {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");

//     const handleLogin = (e) => {
//         e.preventDefault();
//         if(userName===""){
//                 toast.error("Enter Your Username!")
//               }
//               else if(email ===""){
//                 toast.error("Enter Your Email")
//             }
//             else if(!email.includes("@")){
//                 toast.error("Enter Your Valid Email")
//             }
             
          
//               else{
//                 toast.success("Login Done")
//               }
          
//     };

//     const closeModalAndReset = () => {
//       document.body.classList.remove("modal-open"); document.body.classList.remove("modal-open");
//         setUsername("");
//         setEmail("");
//         closeModal();
//     };
//     const handleModalOpen = () => {
//       //           document.body.classList.add("modal-open");
//       //         };
        
//     return (
//         <>
//             <Modal isOpen={isOpen} onRequestClose={closeModalAndReset} footer={null} maskClosable={true} // This allows the modal to close when clicking the background
//        onCancel={closeModalAndReset} // This ensures the same behavior for the close icon
//       style={{
          
        
//           height: '330px', // Let the height adjust based on content
         
//           borderRadius:'25px',
          
//         }}
//         afterOpen={handleModalOpen}
//         centered={true}
//         className="custom-modal">
//                 <form onSubmit={handleLogin}>
//                     <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
//                     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                     <button type="submit">Login</button>
//                 </form>
//             </Modal>
//             <ToastContainer />
//         </>
//     );
// }

// export default LoginModal;
