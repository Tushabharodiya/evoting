import { DELETE_PARTY_ERROR, DELETE_PARTY_PENDING, DELETE_PARTY_SUCCESS, GET_PARTY_ERROR, GET_PARTY_PENDING, GET_PARTY_SUCCESS, GET_VOTER_ERROR, GET_VOTER_PENDING, GET_VOTER_SUCCESS, POST_PARTY_ERROR, POST_PARTY_PENDING, POST_PARTY_SUCCESS, POST_VOTER_ERROR, POST_VOTER_PENDING, POST_VOTER_SUCCESS, } from "./action";


let initialstate = {
    party: [],
    voter:[],
    isLoading: false,
    isError: null,
}


let adminReducer = (state = initialstate, action) => {
    console.log(action);

    switch (action.type) {
        case (GET_PARTY_PENDING, POST_PARTY_PENDING, DELETE_PARTY_PENDING,
            GET_VOTER_PENDING,POST_VOTER_PENDING
        ): {
                return {
                    ...state,
                    isLoading: true,
                }
            }
        //get party
        case GET_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: action.payload.data,
            }
        }
        //post 
        case POST_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.concat(action.payload.data)
            }
        }
        //delete
        case DELETE_PARTY_SUCCESS: {
            return {
                isLoading: false,
                party: state.party.filter((val) => val.id != action.payload.data)
            }
        }
        //get voterlist
        case GET_VOTER_SUCCESS: {
            return {
                isLoading: false,
                voter:action.payload,
            }
        }
        //post voter
        case POST_VOTER_SUCCESS:{
            return{
                isLoading:false,
            }
        }
        case (GET_PARTY_ERROR, POST_PARTY_ERROR, DELETE_PARTY_ERROR, GET_VOTER_ERROR,POST_VOTER_ERROR): {
            return {
                isLoading: false,
                isError: action.payload,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default adminReducer;