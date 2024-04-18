import { commonrequest } from "./ApiCall";
import { API_URL } from "./Helper";

export const registerfunction = async(data)=>{
    return await commonrequest("POST",`${API_URL}/customer`,data)
}