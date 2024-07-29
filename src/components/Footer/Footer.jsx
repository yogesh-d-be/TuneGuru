import React, { useContext } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../StoreContext';
import { toast } from 'react-toastify';

const Footer = () => {
    const {isLoggedIn} = useContext(StoreContext);

    const handleRegister = () =>{
        
        toast.info("You are already registered..!")
      }

    return (
        <>
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img className='shape shape-1' src={require('../../assests/Icons/tool-box.png')} alt='tool-box' />
                    <img className='shape shape-2' src={require('../../assests/Icons/pipe-wrench.png')} alt='pipe wrench' />
                    <img className='shape shape-3' src={require('../../assests/Icons/wire-cutter.png')} alt='cleaning tool' />
                </div>
                <div className="footer-right">
                    <img className='shape shape-1' src={require('../../assests/Icons/cleaning-tools.png')} alt='cleaning-tools' />
                    <img className='shape shape-2' src={require('../../assests/Icons/artist.png')} alt='painting' />
                    <img className='shape shape-3' src={require('../../assests/Icons/hammer.png')} alt='hammer' />
                </div>
                <div className='footer-main-content'>
                    <div className='grid relative'>
                        <img src={require('../../assests/gif/Hammer-gif-2.gif')} alt="robot" className="w-12 absolute robot" />
                        <img src={require('../../assests/images/Tuneguru_logo2.png')} alt="logo" className='w-44 ml-8 f-logo' />
                    </div>
                    <div className='mt-6  footer-category mb-20'>
                        {/* Company */}
                        <div className='text-white'>
                            <h2 className='mb-2 text-lg font-semibold'>Company</h2>
                            <div className='flex flex-col leading-8'>
                                <Link to="/">Home</Link>
                                <Link to="/about">About us</Link>
                                <Link to="/privacypolicy">Privacy Policy</Link>
                                <Link to="/terms&conditions">Terms & Conditions</Link>
                            </div>
                        </div>
                        {/* For customers */}
                        <div className='text-white'>
                            <h2 className='mb-2 text-lg font-semibold'>Customers</h2>
                            <div className='flex flex-col leading-8'>
                                <Link to="/services">Services</Link>
                                {!isLoggedIn ? <Link to="/customer/register">Register as customer</Link>
               : 
                  <Link  onClick={handleRegister}>Register as customer</Link>
               }
                                <Link to="/contactus">Contact Us</Link>
                            </div>
                        </div>
                        {/* For Partners */}
                        <div className='text-white service'>
                            <h2 className='mb-2 text-lg font-semibold'>Service Partners</h2>
                            <div className='flex flex-col leading-8'>
                                <Link to="/customer/mender">Register as mender</Link>
                            </div>
                        </div>
                        {/* Social */}
                        <div className='text-white social'>
                            <h2 className='mb-2 text-lg font-semibold'>Social Links</h2>
                            <div className='flex gap-4'>
                                <Link to="/customer/mender"><img src={require('../../assests/Icons/facebook.png')} alt="facebook" className='w-7' /></Link>
                                <Link to="/customer/mender"><img src={require('../../assests/Icons/social.png')} alt="instagram" className='w-7' /></Link>
                                <Link to="/customer/mender"><img src={require('../../assests/Icons/twitter.png')} alt="twitter" className='w-7' /></Link>
                                <Link to="/customer/mender"><img src={require('../../assests/Icons/linkedin.png')} alt="linkedin" className='w-7' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='house-container'>
                    <img src={require('../../assests/images/House.png')} alt="house" className='w-32' />
                </div>
               
            </div>
            
        </footer>
         <div className="bg-blue-900 text-white  h-fit">
         <p className='flex items-center justify-center py-3 font-semibold'>Powered By Yogesh Mern Stack Developer</p>
       </div>
       </>
    );
};

export default Footer;
