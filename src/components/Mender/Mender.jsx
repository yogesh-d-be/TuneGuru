import React from "react";
import '../Home/Navbar'
function Mender(){

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

return(
<>
<div className="flex w-[80%] justify-center ml-[10%] de:flex-col de:justify-center de:items-center de:w-full de:ml-0 de:mt-14 ta:flex-col ta:justify-center ta:items-center ta:mt-12 mo:mt-12 mo:flex-col mo:justify-center mo:items-center ta:overflow-x-hidden mo:overflow-x-hidden">
    <div className="flex flex-col items-center justify-center w-[40%] text-balance ml-12 lead space-y-8 de:w-full de:ml-0 ta:w-full ta:ml-0 mo:w-full mo:ml-0"><h1 className="text-4xl font-bold ta:text-3xl ta:text-center mo:text-xl mo:text-center">Work Flexibly. Earn Steadily. Thrive Safely.</h1>
    <p className="font-semibold text-lg mt-6 ta:text-base ta:text-center mo:text-center mo:text-base">Join Today, Work Tomorrow: Easy Registration for Top Professionals!</p>
    </div>
    <div className="w-[40%] ta:w-full ta:flex ta:justify-center mo:flex mo:justify-center mo:w-full"><img src={require('../../assests/images/mender.png')} alt="mender" className="w-[500px] ta:w-[300px] mo:w-[250px]"/></div>
</div>
<div className="bg-blue-300 rounded-2xl w-[80%] ml-[10%] flex flex-col justify-center items-center shadow-2xl mb-8 pb-8 ta:w-[90%] ta:ml-[5%] mo:w-full mo:ml-0 ">
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

<div className="flex flex-col mt-12 bg-blue-900 rounded-xl pb-6 flex-wrap mo:mx-6">
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
        <p className="my-6 text-white">Click the button below to register and become a part of our trusted network.</p>
        <button className="w-[200px] px-4 py-2 bg-orange-500 rounded-xl text-white font-semibold hover:ring hover:ring-orange-500 hover:text-orange-500 hover:bg-white hover:scale-105 duration-300 transition-all ease-in-out">Register Now</button>
    </div>
</div>
</>
)
}



export default Mender;