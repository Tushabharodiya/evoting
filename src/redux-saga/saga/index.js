import { all } from "redux-saga/effects";
import { handle_add_voter_saga, handle_delete_party_saga, handle_get_party_saga, handle_get_voter_saga, handle_post_party_saga } from "./root/productSaga";




function* rootSaga() {
    yield all([handle_get_party_saga(),
        handle_post_party_saga(),
        handle_delete_party_saga(),
        //voter
        handle_get_voter_saga(),
        handle_add_voter_saga(),
    ])
}

export default rootSaga;