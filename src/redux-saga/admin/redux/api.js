import axios from "axios"
import { add_user, delete_user, get_user } from "../../api/Appi"
import { ADD_VOTER, Add_PARTY, BASE_URL, DELETE_PARTY, GET_PARTY, GET_VOTER } from "../../constnt"




let get_party = async (action) => {
    let { data, status } = await get_user(GET_PARTY)
    // console.log(res);
    return { data, status }
}

let post_party = async (action) => {
    console.log(action,"aaa");
    let { data, status } = await axios.post(BASE_URL + Add_PARTY, action.payload)
    console.log(data,"dafadada");
    return { data, status }
}

let delete_party = async (action) => {
    let { data, status } = await delete_user(DELETE_PARTY, action.payload)
    return { data, status }
}


// ================voter==================
let get_voter = async () => {
    let { data, status } = await get_user(GET_VOTER)
    return { data, status }
}

let add_voter = async (action) => {
    let res = await add_user(ADD_VOTER, action.payload)
    console.log(res);
}

export { get_party, post_party, delete_party, get_voter,add_voter }