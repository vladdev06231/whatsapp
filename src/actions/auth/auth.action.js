import * as authType from './type.js'

export function signUp(userInfo) {
    return {
        type: authType.SIGNUP,
        payload: userInfo
    }
}