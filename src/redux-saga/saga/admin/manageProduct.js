import { call, put } from "redux-saga/effects";
import { add_party, add_voter, delete_party, get_party, get_voter, post_party } from "../../admin/redux/api";
import { DELETE_PARTY_ERROR, DELETE_PARTY_SUCCESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, GET_VOTER_ERROR, GET_VOTER_SUCCESS, POST_PARTY_ERROR, POST_PARTY_SUCCESS } from "../../admin/redux/action";



function* handle_get_party(action) {
    try {
        let { data, status } = yield call(get_party, action)
        yield put({ type: GET_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_PARTY_ERROR, payload: error })
    }

}

function* handle_post_party(action) {
    try {
        let { data, status } = yield call(post_party, action)
        console.log(data,"manage");
        yield put({ type: POST_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_PARTY_SUCCESS, payload: error })
    }
}

function* handle_delete_party(action) {
    try {
        let { data, status } = yield call(delete_party, action)
        yield put({ type: DELETE_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: DELETE_PARTY_ERROR, payload: error })
    }
}

///===================voter============
function* handle_get_voter(action) {
    try {
        let { data, status } = yield call(get_voter, action)
        yield put({ type: GET_VOTER_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: GET_VOTER_ERROR, payload: error })
    }
}

function* handle_add_voter(action) {
    let res=yield call(add_voter,action)
    console.log(res);
}
export { handle_get_party, handle_post_party, handle_delete_party, handle_get_voter,handle_add_voter }