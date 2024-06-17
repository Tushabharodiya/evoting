import { takeLatest } from "redux-saga/effects";
import { DELETE_PARTY_PENDING, GET_PARTY_PENDING, GET_VOTER_PENDING, POST_PARTY_PENDING, POST_VOTER_PENDING } from "../../admin/redux/action";
import { handle_add_voter, handle_delete_party, handle_get_party, handle_get_voter, handle_post_party } from "../admin/manageProduct";



function* handle_get_party_saga() {
    yield takeLatest(GET_PARTY_PENDING, handle_get_party)
}

function* handle_post_party_saga() {
    yield takeLatest(POST_PARTY_PENDING, handle_post_party)
}
//voter
function* handle_delete_party_saga() {
    yield takeLatest(DELETE_PARTY_PENDING, handle_delete_party)
}

function* handle_get_voter_saga() {
    yield takeLatest(GET_VOTER_PENDING, handle_get_voter)
}
function* handle_add_voter_saga() {
    yield takeLatest(POST_VOTER_PENDING,handle_add_voter)
}


export { handle_get_party_saga, handle_post_party_saga, handle_delete_party_saga,handle_get_voter_saga,handle_add_voter_saga }