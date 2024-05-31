// import React from "react";
// import {Link} from "react-router-dom"
// import "./Navbar.css";
// import { Button, Modal } from 'antd';
// // import { CloseOutlined } from '@ant-design/icons';
// function Appliances({}){
 

//   const closeModalAndReset = () => {
//         document.body.classList.remove("modal-open"); document.body.classList.remove("modal-open");
//           closeModal();
//         };
//   const handleModalOpen = () => {
//           document.body.classList.add("modal-open");
//         };
  
//    return(
//       <>
//       {/* <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button> */}
//       <Modal  open={isOpen}  footer={null}//todisappear the cancel and ok button
//         maskClosable={true} // This allows the modal to close when clicking the background
//         onCancel={closeModalAndReset} // This ensures the same behavior for the close icon
//         style={{
//           width:'550px',
//           maxWidth: '435px',
//           height: '330px', // Let the height adjust based on content
         
//           borderRadius:'25px',
          
//         }}
//         afterOpen={handleModalOpen}
//         centered={true}
//         className="custom-modal"
//        >
//         <div className="border-b-2 border-solid border-black ">
//        <h1 className="font-bold text-2xl mb-3 mt-1 ml-4 " >LogIn</h1>
//        </div>
//        <input type="text" placeholder="Username" className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4"></input><br/> 
//        <input type="number" placeholder="Enter Mobile No" className="border border-black rounded-lg pl-2 h-8  w-3/4 mt-8 ml-4 mb-6"></input><br/> 
//        <button className="px-4 py-2 bg-blue-900 mb-4 text-white font-medium rounded-lg ml-4">Proceed</button><br/>
//        <input type="checkbox" className=" ml-6 text-3xl checked:ring-green-600" /><span className="ml-2 ">I agree to the <Link to="/terms&conditions" className="text-blue-900 font-medium">Terms & Conditions</Link></span>
      
//       </Modal>
//       </>
//    )
// }

// export default Appliances;