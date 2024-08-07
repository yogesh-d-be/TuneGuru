import React, { useContext, useEffect, useRef, useState } from "react";
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { toast } from 'react-toastify';
import '../Home/Navbar'
import apiInstance from "../ApiInstance";
import axios from "axios";
import Swal from 'sweetalert2';
import { API_URL } from "../../service/Helper";
import '../Contact/Contact.css'
import { StoreContext } from "../StoreContext";
import LoginModal from "../Register_Login/LoginModal";

function Mender(){

    const { closeLoginModal, loginModalOpen } = useContext(StoreContext)


    const [menderData, setMenderData] = useState({
        name:"",
        mobileNumber:"",
        emailId:"",
        currentAddress:"",
        expertise:[],
        experience:"",
        profilePicture:null,
        aadhaar:null,
        pancard:null,
        bank:null
    })

    const [profilePicture, setProfilePicture] = useState(null);
    const [aadhaar, setAadhaar] = useState(null);
    const [pancard, setPancard] = useState(null);
    const [bankDetails, setBankDetails] = useState(null)

    const [selectedExpertise, setSelectedExpertise] = useState([]);

    const [showPopup, setShowPopup] = useState(false);

    const profileRef = useRef(null);
    const aadhaarRef = useRef(null);
    const panRef = useRef(null);
    const bankRef = useRef(null);

    const scrollToForm = () =>{
        const form = document.getElementById("form");
        if(form){
            form.scrollIntoView({behavior:"smooth"})
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
          setShowPopup((prevPopup)=>!prevPopup);
        },5000)
        return () => clearInterval(interval)
       },[])
    
       const handleChat = async() => {
        
       
      try{
        const {value: whatsappNumber} = await Swal.fire({
          title: 'Enter Whatsapp Number',
          input:'text',
        //   inputValue: mobileNumber,
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
            const message = `I need your assistance. \nI am willing to join with Tuneguru family`;
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

      const handleProfilePic = () =>{
        profileRef.current.click();
      }

    const handleAadhaar = () =>{
        aadhaarRef.current.click();
    }

    const handlePancard = () =>{
        panRef.current.click();
    }

    const handleBank = () =>{
        bankRef.current.click();
    }

    const handleClearProfile = () => {
        setMenderData(prev => ({
            ...prev, profilePicture: null
        }));
        setProfilePicture(null)
        if (profileRef.current) {
            profileRef.current.value = "";
            // Disable file input temporarily after clearing
            profileRef.current.setAttribute("disabled", true);
            setTimeout(() => {
                if (profileRef.current) {
                    profileRef.current.removeAttribute("disabled");
                }
            }, 1000);
        } else {
            console.error("aadhaarRef.current is null");
        }
    }

    const handleClearAadhaar = () => {
        setMenderData(prev => ({
            ...prev, aadhaar: null
        }));
        setAadhaar(null)
        if (aadhaarRef.current) {
            aadhaarRef.current.value = "";
            // Disable file input temporarily after clearing
            aadhaarRef.current.setAttribute("disabled", true);
            setTimeout(() => {
                if (aadhaarRef.current) {
                    aadhaarRef.current.removeAttribute("disabled");
                }
            }, 1000);
        } else {
            console.error("aadhaarRef.current is null");
        }
    }

    const handleClearPancard = () => {
        setMenderData(prev => ({
            ...prev, pancard: null
        }));
        setPancard(null);
        if (panRef.current) {
            panRef.current.value = "";
            // Disable file input temporarily after clearing
            panRef.current.setAttribute("disabled", true);
            setTimeout(() => {
                if (panRef.current) {
                    panRef.current.removeAttribute("disabled");
                }
            }, 100);
        } else {
            console.error("panRef.current is null");
        }
    }

    const handleClearBank = () => {
        setMenderData(prev => ({
            ...prev, bank: null
        }));
        setBankDetails(null);
        if (bankRef.current) {
            bankRef.current.value = "";
            // Disable file input temporarily after clearing
            bankRef.current.setAttribute("disabled", true);
            setTimeout(() => {
                if (bankRef.current) {
                    bankRef.current.removeAttribute("disabled");
                }
            }, 100);
        } else {
            console.error("bankRef.current is null");
        }
    }

    const onChangeHandle = (event) =>{
        const {name, value, files} = event.target;

        // if(files && files[0] && files[0].type !== 'application/pdf'){
        //     toast.error("Invalid file type. Only pdf files are allowed")
        // }


        if(name === 'profilePicture'){
            const file = files[0];
            if(!file) return;
            setMenderData((prev)=>({
                ...prev, profilePicture:file
            }))
            setProfilePicture(file)
        }
        if(name === 'aadhaar'){
            const file = files[0];
            if(!file) return;
            setMenderData((prev)=>({
                ...prev, aadhaar:file
            }))
            setAadhaar(file)
        }
        else if(name === 'pancard'){
            const file = files[0];
            if(!file) return;
            setMenderData((prev)=>({
                ...prev, pancard:file
            }))
            setPancard(file)
        }
        else if(name === 'bank'){
            const file = files[0];
            if(!file) return;
            setMenderData((prev)=>({
                ...prev, bank:file
            }))
            setBankDetails(file)
        }
        else{
            setMenderData((prev)=>({...prev, [name]:value}))
        }
    }

    useEffect(()=>{
        console.log(menderData)
    },[menderData])

    

    const benefits = [
        {
            icon: require('../../assests/Icons/no-fee (1).png'),
            line:"No Joining Fees: Free registration and no hidden costs."
        },
        {
            icon: require('../../assests/Icons/mobile-banking.png'),
            line:"Easy Payments: Receive payments directly to your bank account."
        },
        {
            icon: require('../../assests/Icons/24-hours-support.png'),
            line:"24/7 Support: Our team is here to assist you whenever you need."
        },
        
    ]

    const join = [
        {
            icon:require('../../assests/Icons/plumber (3).png'),
            line:"Plumbing"
        },
        {
            icon:require('../../assests/Icons/e_install.png'),
            line:"Electrical Work"
        },
        {
            icon:require('../../assests/Icons/carpenter (2).png'),
            line:"Carpentry"
        },
        {
            icon:require('../../assests/Icons/paint-roller.png'),
            line:"Painting"
        },
        {
            icon:require('../../assests/Icons/vaccum-cleaner.png'),
            line:"Cleaning"
        },
        {
            icon:require('../../assests/Icons/plus.png'),
            line:"And more!"
        },
    ]


    const expertiseOptions = [
        { value: 'Ac repair service', label: 'Ac repair service' },
        { value: 'Fridge repair service', label: 'Fridge repair service' },
        { value: 'Washing machine repair service', label: 'Washing machine repair service' },
        { value: 'TV repair service', label: 'TV repair service' },
        { value: 'Mixer & Grinder repair service', label: 'Mixer & Grinder repair service' },
        { value: 'Inverter repair service', label: 'Inverter repair service' },
        { value: 'Electrician', label: 'Electrician' },
        { value: 'Plumber', label: 'Plumber' },
        { value: 'Carpenter', label: 'Carpenter' },
        { value: 'Mobile repair service', label: 'Mobile repair service' },
        { value: 'PC & Laptop repair service', label: 'PC & Laptop repair service' },
        { value: 'Printer repair service', label: 'Printer repair service' },
        { value: 'Cleaning services', label: 'Cleaning services' },
        { value: 'Pest control services', label: 'Pest control services' },
        { value: 'Bike repair service', label: 'Bike repair service' },
        { value: 'Car repair service', label: 'Car repair service' },
        { value: 'Water purifier repair service', label: 'Water purifier repair service' },
        { value: 'Painting', label: 'Painting' },
    ];

    const handleExpertiseChange = (selectedOptions) =>{
        setSelectedExpertise(selectedOptions);
        setMenderData((prev)=>({
            ...prev,
            expertise: selectedOptions? selectedOptions.map(selected => selected.value) : []
        }))
    }

    const handleRemoveExpertise = (expertiseToRemove) =>{
        setSelectedExpertise(selectedExpertise.filter(prevExpertise => prevExpertise.value !== expertiseToRemove.value))
        setMenderData((prev)=>({
            ...prev,
            expertise: prev.expertise.filter(prevExpertise => prevExpertise !== expertiseToRemove.value)
        }))
    }
    
    const animatedComponents = makeAnimated();

    const customStyles = { //It prevent the selected option shows in drop down menu
        multiValue: (provided) =>({
            ...provided,
            display:'none'
        }),
        multiValueLabel:(provided) => ({
            ...provided,
            display:'none'
        })
    }

    let config = {
        headers:{
            // Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
            'Content-Type':'multipart/form-data'
        }
    }

    const handleRegisteredSubmit = (event) =>{
        event.preventDefault();
        toast.info("You Are Already Registered With Tuneguru Family")
    }
    
    
    
        const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { name, emailId, mobileNumber, currentAddress, expertise, experience, aadhaar, pancard, bank } = menderData;
    
        // Validation checks for empty fields
        if (name === "") {
            return toast.error("Enter Your Full Name!");
        } else if (emailId === "") {
            return toast.error("Enter Your Email!");
        } else if (!emailId.includes("@") || !emailId.includes(".")) {
            return toast.error("Enter Valid Email!");
        } else if (mobileNumber === "") {
            return toast.error("Enter Your Mobile Number!");
        } else if (mobileNumber.length !== 10) {
            return toast.error("Enter Valid Mobile Number!");
        } else if (currentAddress === "") {
            return toast.error("Enter Your Current Address!");
        } else if (expertise === "") {
            return toast.error("Enter Your Expertise Field!");
        } else if (experience === "") {
            return toast.error("Enter Your Year Of Experience!");
        }else if(!profilePicture){
            return toast.error("Upload Your Picture!");
        }else if(!aadhaar){
            return toast.error("Upload Your Aadhaar!");
        }else if(!pancard){
            return toast.error("Upload Your Pancard!");
        
        }else if(!bank){
            return toast.error("Upload Your Bank Details");
        }
    
        try {
            // Step 1: Validate the form data (excluding files)
            const validationResponse = await axios.post(`${API_URL}/api/mender/validate`, { emailId, mobileNumber });
    
            if (validationResponse.status === 200) {
                // Proceed only if validation is successful
                const formData = new FormData();
                formData.append("name", name);
                formData.append("emailId", emailId);
                formData.append("mobileNumber", mobileNumber);
                formData.append("currentAddress", currentAddress);
                formData.append("expertise", expertise);
                formData.append("experience", experience);
    
                
                if (profilePicture) {
                    formData.append("profilePicture", profilePicture);
                }
                if (aadhaar) {
                    formData.append("aadhaar", aadhaar);
                }
                if (pancard) {
                    formData.append("pancard", pancard);
                }
                if (bank) {
                    formData.append("bank", bank);
                }
    
                
                const response = await apiInstance.post(`/api/mender/register`, formData, config);
    
                if (response.status === 200) {
                    toast.success(response.data.message);
                    
                    setMenderData({
                        name: "",
                        mobileNumber: "",
                        emailId: "",
                        currentAddress: "",
                        expertise: [],
                        experience: "",
                        profilePicture:null,
                        aadhaar: null,
                        pancard: null,
                        bank: null
                    });
                    setSelectedExpertise([]);
                    handleClearProfile();
                    handleClearAadhaar();
                    handleClearPancard();
                    handleClearBank();
                    setIsRegistered(true);
                
                    localStorage.setItem('menderRegistrationState', JSON.stringify(true));
                } else {
                    toast.error(response.data.message);
                }
            } else {
                toast.error(validationResponse.data.message);
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error("This mender already exists");
            } else {
                toast.error("An error occurred while registering");
            }
        }
    };
    

    const MenuList=(props)=>{ //already selected options doesnt show in dropdown option list. it crates unique dropdown list
        const filteredOptions = props.options.filter(option => 
            !selectedExpertise.some(selected => selected.value === option.value))

            return <components.MenuList {...props} options={filteredOptions} />
    }

    const [isRegistered, setIsRegistered] = useState(false)

    useEffect(() => {
        const storedState = localStorage.getItem('menderRegistrationState');
        if (storedState) {
          setIsRegistered(JSON.parse(storedState));
        }
      }, []);
 
return(
<>
{loginModalOpen && (
        <LoginModal isOpen={true} closeModal={closeLoginModal} />
      )}
<div className="flex w-[80%] justify-center ml-[10%] de:flex-col de:justify-center de:items-center de:w-full de:ml-0 de:mt-14 ta:flex-col ta:justify-center ta:items-center ta:mt-12 mo:mt-12 mo:flex-col mo:justify-center mo:items-center ta:overflow-x-hidden mo:overflow-x-hidden">
    <div className="flex flex-col items-center justify-center w-[40%] text-balance ml-12 lead space-y-8 de:w-full de:ml-0 ta:w-full ta:ml-0 mo:w-full mo:ml-0"><h1 className="text-4xl font-bold ta:text-3xl ta:text-center mo:text-xl mo:text-center">Work Flexibly. Earn Steadily. Thrive Safely.</h1>
    <p className="font-semibold text-lg mt-6 ta:text-base ta:text-center mo:text-center mo:text-base">Join Today, Work Tomorrow: Easy Registration for Top Professionals!</p>
    </div>
    <div className="w-[40%] ta:w-full ta:flex ta:justify-center mo:flex mo:justify-center mo:w-full"><img src={require('../../assests/images/mender.png')} alt="mender" className="w-[500px] ta:w-[300px] mo:w-[250px]"/></div>
</div>
<div className="bg-blue-300 rounded-2xl w-[80%] ml-[10%] flex flex-col justify-center items-center shadow-2xl mb-8 pb-8 ta:w-[90%] ta:ml-[5%] mo:w-full mo:ml-0 mo:rounded-none">
    <h1 className="text-2xl font-semibold mt-12 text-center mx-6 ta:text-xl mo:text-lg">Join Our Network of TuneGuru Home Maintenance Professionals</h1>
    
    <div className="grid justify-items-center mt-12 bg-blue-900 rounded-xl pb-6 mx-4"><h2 className="text-lg font-bold mt-4 text-white">Why Partner with Us?</h2>
    <div className="grid grid-cols-4 gap-8 px-4 mt-8 de:grid-cols-2 ta:grid-cols-2 mo:grid-cols-1">
        <div className="grid justify-items-center"><img src={require('../../assests/images/customer.jpg')} alt="customer" className="w-[150px] h-[100px] rounded-xl" /><p className="text-center font-semibold mt-1 text-white">Reach More Customers</p></div>
        <div className="grid justify-items-center"><img src={require('../../assests/images/more job.png')} alt="job" className="w-[150px] h-[100px] rounded-xl"/><p className="text-center font-semibold mt-1 text-white">Access more job opportunities</p></div>
        <div className="grid justify-items-center"><img src={require('../../assests/images/flexible working.jpg')} alt="timing" className="w-[150px] h-[100px] rounded-xl"/><p className="text-center font-semibold mt-1 text-white">Flexible Work</p></div>
        <div className="grid justify-items-center"><img src={require('../../assests/images/community.png')} alt="community" className="w-[150px] h-[100px] rounded-xl"/><p className="text-center font-semibold mt-1 text-white">Supportive Community</p></div>
    </div>
    </div>

    <div className="grid justify-items-center mt-12 bg-blue-900 rounded-xl pb-6 "><h2 className="text-lg font-bold text-white mt-4">How It Works</h2>
    <div className="grid grid-cols-3 gap-40 px-4 mt-8 de:grid-cols-2 de:gap-14  de:px-8 ta:grid-cols-2 ta:gap-14  ta:px-8 mo:grid-cols-1 mo:px-20 mo:gap-8">
        <div className="grid justify-items-center"><img src={require('../../assests/Icons/website.png')} alt="register" className="w-[100px] rounded-xl" /><p className="text-center font-semibold mt-1 text-white">Register</p></div>
        <div className="grid justify-items-center"><img src={require('../../assests/Icons/profile (2).png')} alt="profile" className="w-[100px] rounded-xl"/><p className="text-center font-semibold mt-1 text-white">Get Verified</p></div>
        <div className="grid justify-items-center"><img src={require('../../assests/Icons/working.png')} alt="working" className="w-[100px] rounded-xl"/><p className="text-center font-semibold mt-1 text-white">Start Working</p></div>
       
    </div>
    </div>

<div className="flex flex-col mt-12 bg-blue-900 rounded-xl pb-6 flex-wrap mo:mx-6 ">
    <h2 className="text-lg font-bold text-center mb-4 text-white mt-4">Benefits of Joining</h2>
    <ul className="flex flex-col justify-start items-start space-y-2 ta:justify-center ta:items-center mo:justify-center mo:items-center">
        { benefits.map((listing,i)=>(
        <li key={i} className=" text-white rounded-md px-4 py-2 flex items-center gap-4 ta:flex-col ta:justify-center ta:items-center mo:flex-col mo:justify-center mo:items-center">
            <img src={listing.icon} alt={`list${i+1}`} className="w-12" />
            <p className="text-wrap mo:text-sm mo:mx-auto mo:text-wrap mo:w-[300px]">{listing.line}</p>
        </li>
        ))
}
    </ul>
</div>

    <div className="flex flex-col  mt-12 bg-blue-900 rounded-xl pb-6 px-8 py-4 mo:mx-6">
        <h2 className="text-lg font-bold text-center mb-4 text-white ">Who Can Join?</h2>
        <p className="text-white mb-4">We welcome professionals with experience in:</p>
        <ul className="flex flex-col justify-start items-start space-y-4">
            {join.map((work,i)=>(
            <li key={i} className="flex items-center gap-2">
                <img src={work.icon} alt={`work ${i+1}`} className="w-12"/>
            <p className="text-white">{work.line}</p>
            </li>
            ))}
        </ul>
    </div>
    <div className="w-[90%] bg-blue-900 rounded-xl px-6 py-4 mt-8 flex flex-col justify-center items-center">
        <h1 className="text-lg font-bold mt-6 text-white">Ready to Get Started?</h1>
        <p className="my-6 text-white">Click the button below to form then register and become a part of our trusted network.</p>
        {!isRegistered ?<button onClick={scrollToForm} className="w-[200px] px-4 py-2 bg-orange-500 rounded-xl text-white font-semibold hover:ring hover:ring-orange-500 hover:text-orange-500 hover:bg-white hover:scale-105 duration-300 transition-all ease-in-out">Register Now</button>
        :
        <div className="w-[200px] px-4 py-2 bg-orange-500 rounded-xl text-white font-semibold text-center">You Are Registered</div>}
    </div>

</div>

{/* Form */}
 
<div id="form" className="mt-12 flex flex-col justify-center items-center w-full mb-12">
        <form  onSubmit={!isRegistered ? handleSubmit : handleRegisteredSubmit} className="flex flex-col bg-blue-900 px-14 py-4 w-[80%]  shadow-2xl rounded-xl ta:w-[90%]  mo:w-full mo:rounded-none">
            <div className="flex flex-col gap-2 w-[80%] ml-[10%] ta:ml-[5%] mo:w-full mo:ml-0">
            <h1 className="text-2xl font-bold my-12 text-white">Register Your Details</h1>
            <input type="text" name="name" id="" value={menderData.name} placeholder="Full Name" onChange={onChangeHandle} className="rounded-xl "/>
            <input type="number" name="mobileNumber" id="" value={menderData.mobileNumber} placeholder="Mobilenumber" onChange={onChangeHandle} className="mt-3 rounded-xl"/>
            <input type="email" name="emailId" id="" value={menderData.emailId} placeholder="Email Address" onChange={onChangeHandle} className="mt-3 rounded-xl"/>
            
           
           { selectedExpertise ? <div className="">
                {selectedExpertise.map((exp,index)=>(
                    <div key={index} className="bg-gray-200 rounded-full px-3 py-2 text-center inline-block mr-2 mb-2">
                        {exp.label} <span className="text-red-500 cursor-pointer my-auto text-lg font-semibold ml-2 mr-2" onClick={() => handleRemoveExpertise(exp)}>x</span>
                        </div>
                 
                ))}
            </div>:
            <div className="mt-0"></div>}
            <Select
            isMulti
            components={{...animatedComponents, MenuList}}
            options={expertiseOptions}
            className="mt-2"
            onChange={handleExpertiseChange}
            value={selectedExpertise}
            placeholder= "Select expertise"
            styles={customStyles}
            />

            <select type="text" name="experience" id="" value={menderData.experience} onChange={onChangeHandle} className="mt-3 rounded-xl">
                <option value="experience">Experience</option>
                <option value="0-1 year">0-1 year</option>
                <option value="1-2 years">1-2 years</option>
                <option value="2-3 years">2-3 years</option>
                <option value="3-4 years">3-4 years</option>
                <option value="4-5 years">4-5 years</option>
                <option value="more than 5 years">more than 5 years</option>
            </select>
            <textarea name="currentAddress" id="" cols="30" rows="6" value={menderData.currentAddress} placeholder="Current Address" onChange={onChangeHandle} className="mt-3 rounded-xl"></textarea>
            <div onClick={handleProfilePic } className="mt-3 ">
                {profilePicture ? <div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><img src={URL.createObjectURL(profilePicture)} className="w-40" alt="Mender"/><div className="flex"><p className="text-white font-semibold text-center">{profilePicture.name}</p><img onClick={handleClearProfile} src={require('../../assests/Icons/cancel.png')} className="ml-3 h-5 mt-1 cursor-pointer" alt="cancel"/></div></div>
                        :
                        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><img src={require('../../assests/Icons/photo.png')} className="w-40" alt="Mender"/> 
                        <p className="text-white font-semibold">Upload Your Photo</p></div>}
            </div>
            <input ref={profileRef} type="file" name="profilePicture"  accept="image/*"  onChange={onChangeHandle} hidden/>
            <div onClick={handleAadhaar } className="mt-3 ">
                {aadhaar? <div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><embed src={URL.createObjectURL(aadhaar)}
                        type="application/pdf"
                        width="100%"
                        height="300px" /><div className="flex"><p className="text-white font-semibold text-center">{aadhaar.name}</p><img onClick={handleClearAadhaar} src={require('../../assests/Icons/cancel.png')} className="ml-3 h-5 mt-1 cursor-pointer" alt="cancel"/></div></div>
                        :
                        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><img src={require('../../assests/images/aadhaar-card.png')} className="w-40" alt="aadhaar card"/> 
                        <p className="text-white font-semibold">Upload Aadhaar PDF</p></div>}
            </div>
            <input ref={aadhaarRef} type="file" name="aadhaar"  accept="application/pdf"  onChange={onChangeHandle} hidden/>
            <div onClick={handlePancard} className="mt-3">
                {pancard?<div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><embed src={URL.createObjectURL(pancard)}
                        type="application/pdf"
                        width="100%"
                        height="300px" /><div className="flex"><p className="text-white font-semibold text-center">{pancard.name}</p><img onClick={handleClearPancard} src={require('../../assests/Icons/cancel.png')} className="ml-3 h-5 mt-1 cursor-pointer" alt="cancel"/></div></div>
                        :
                        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><img src={require('../../assests/images/pan-card.png')} className="w-40" alt="pancard"/> 
                        <p className="text-white font-semibold">Upload Pancard PDF</p></div>}
            </div>
            <input ref={panRef} type="file" name="pancard"  accept="application/pdf" onChange={onChangeHandle} hidden/>
            <div onClick={handleBank} className="mt-3">
                {bankDetails? <div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><embed src={URL.createObjectURL(bankDetails)}
                        type="application/pdf"
                        width="100%"
                        height="300px" /><div className="flex"><p className="text-white font-semibold text-center">{bankDetails.name}</p><img onClick={handleClearBank} src={require('../../assests/Icons/cancel.png')} className="ml-3 h-5 mt-1 cursor-pointer" alt="cancel"/></div></div>
                        :
                        <div className="flex flex-col gap-2 justify-center items-center cursor-pointer"><img src={require('../../assests/images/bank passbook.png')} className="w-40" alt="bank passbook"/> 
                        <p className="text-white font-semibold">Upload Bank Passbook PDF</p></div>}
            </div>
            <input ref={bankRef} type="file" name="bank"  accept="application/pdf" onChange={onChangeHandle} hidden/>

            

            <button type="submit" className="mt-12 px-4 py-2 rounded-xl bg-orange-500 text-white font-bold hover:bg-white hover:ring hover:ring-orange-500 hover:text-orange-500 hover:scale-105 duration-300 transition-all ease-in-out w-[200px] mx-auto">Submit</button>
            </div>
        </form>
    </div>{isRegistered &&
    <div id="form" className="mt-12 flex flex-col justify-center items-center w-full mb-14">
        <div  className="flex flex-col bg-blue-900 px-14 py-4 w-[80%]  shadow-2xl rounded-xl ta:w-[90%]  mo:w-full mo:rounded-none">
                <p className="text-white font-semibold mt-6">Welcome aboard the TuneGuru journey! Your registration is a success, and we're thrilled to have you on our team of professionals.</p>
                <div  className="mt-8 mb-4 px-4 py-2 bg-blue-500 rounded-xl text-white font-semibold  text-center w-fit mx-auto">Further Update Contact Support Team</div>
            </div>
            </div>
    }

<div id="chat" className="sticky z-100 w-full  flex  bottom-0">
            <img src={require('../../assests/Icons/whatsapp.png')} alt="whatsapp" onClick={handleChat} className={`cursor-pointer w-14  absolute right-3 bottom-0 ${!isRegistered ?"mb-8":"mb-2"}` }/>
          
          {
            showPopup&&(
              <div className="popup-animation absolute bottom-16 right-16 bg-white border border-gray-300 p-4 rounded shadow-lg  de:w-[145px] ta:w-[145px] mo:w-[145px]">
              <div className="typing-animation">Chat with Team</div>
  
            </div>
            )
          }
         </div>
</>
)
}



export default Mender;

