import React, { useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import apiInstance from "../ApiInstance";


function Verify() {
  
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const bookingId = searchParams.get("bookingId");
  const navigate = useNavigate();

  const verifyBooking = async (bookingId, success) => {
    // let config = {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("userdbtoken")}`,
    //   },
    // };
    try {
      const response = await apiInstance.post(
        `/api/book/verify`,
        { bookingId, success },
        // config
      );

      return response.data;
    } catch (error) {
      console.error("Error verifying payment:", error);
      throw error;
    }
  };

  const verifyPayment = useCallback( async () => {
    try {
      const result = await verifyBooking(bookingId, success);
      if (result.success) {
        console.log("called");
        console.log("book",bookingId)
        navigate("/mybookings");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      navigate("/cart");
    }
  },[bookingId,success,navigate]);

  useEffect(() => {
    verifyPayment();
  }, [verifyPayment]);

  return <></>;
}

export default Verify;
