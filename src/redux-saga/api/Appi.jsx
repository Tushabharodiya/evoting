import axios from "axios"
import { BASE_URL } from "../constnt"



let get_user = async (endpoint) => {
  let res = await axios.get(BASE_URL + endpoint)
  return res
}

let add_user=async(endpoint,action)=>{
  let res=await axios.post(BASE_URL+endpoint,action)
  return res;
}

let delete_user=async(endpoint,id)=>{
  let res=await axios.delete(BASE_URL+endpoint+id)
  return res;
}
export {get_user,add_user,delete_user}