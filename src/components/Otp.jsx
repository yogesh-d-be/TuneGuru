// import React,{useState} from 'react';
// function OTPForm() {
//     const [otp, setOTP] = useState('');
//     const [message, setMessage] = useState('');

//     const handleOTPProceed = async () => {
//         try {
//             const response = await axios.post('/api/auth/verifyOTP', { phoneNumber, email, OTP });
//             const { token } = response.data;

//             // Handle successful login, store token in local storage, redirect, etc.
//         } catch (error) {
//             setMessage('Invalid OTP. Please try again.');
//             console.error(error);
//         }
//     };

//     return (
//         <form className="border-1 border-black w-[30%] h-[350px] top-2/4 translate-y-1/2 rounded-2xl mo:w-[70%] mo:absolute mo:top-14 mo:h-[350px] ta:w-[60%] ta:absolute ta:top-14  de:w-[50%] de:absolute de:top-14 des_search:w-[40%] mo:h-80"
//             style={{
//                 backgroundColor: "rgba(0, 0, 0, 0.581)"
//             }}>
//             <div className="border-b-2 border-solid border-black" >
//                 <h1 className="font-bold text-2xl mb-3 mt-4 ml-4 text-white">Enter OTP</h1>
//             </div>
//             <input type="text" placeholder="Enter OTP" className="border border-black rounded-lg pl-2 h-8 w-3/4 mt-4 ml-4 mo:w-3/4" value={otp} onChange={(e) => setOTP(e.target.value)} /><br />
//             <button className="px-4 py-2 bg-blue-900 mb-2 text-white font-medium rounded-lg ml-4" onClick={handleOTPProceed}>Proceed</button><br />
//             {message && <p className="ml-6 mb-4 text-white">{message}</p>}
//         </form>
//     );
// }
// export default OTPForm;