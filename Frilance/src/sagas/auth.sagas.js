import { takeEvery, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import * as ActionTypes from '../constants/auth.constants'
import * as actions from '../actions/auth.actions'
import * as api from '../api/auth.api'

export function* signIn({ payload }) {
    try {
        const response = yield call(api.signIn, payload)
        if (response) {
            yield put(actions.signInSuccess())
        }
    } catch (error) {
        yield put(actions.signInError(error))
        toast.error(error.message)
    }
}

export function* signUp({ payload }) {
    try {
        const response = yield call(api.signUp, payload)
        if (response) {
            yield put(actions.signUpSuccess())
        }
    } catch (error) {
        yield put(actions.signUpError(error))
        toast.error(error.message)
    }
}


export default function* authSagas() {
    yield all([
        takeEvery(ActionTypes.SIGN_IN_REQUEST, signIn),
        takeEvery(ActionTypes.SIGN_UP_REQUEST, signUp),
    ])
}
