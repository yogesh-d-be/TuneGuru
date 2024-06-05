import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API_URL } from "../service/Helper";
import axios from "axios";

function Verify(){
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success")
    const bookingId = searchParams.get("bookingId")
    const navigate = useNavigate()

    const verifyPayment = async(req,res) =>{
        const response = await axios.post(API_URL+"/api/book/verify",{success,bookingId});
        if(response.data.success){
            navigate("/myorders")
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment();
        // eslint-disable-next-line
    },[])

    return(
        <>
        
        </>
    )
}

export default Verify;