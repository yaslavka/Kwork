export const getAccessToken = () => {
    try {
        const accessToken = localStorage.getItem('access_token')
        if (accessToken === null) {
            return undefined
        }
        return accessToken
    } catch (error) {
        return undefined
    }
}

export const setAccessToken = ({ access_token }) => {
    localStorage.setItem('access_token', access_token)
}

export const createFormDataObj = (payload) => {
    const formData = new FormData()
    for (let key in payload) {
        formData.append(key, payload[key])
    }
    //console.log(JSON.stringify(formData));
    return formData
}
export const isValidPassword = (password) => {
    const passwordValidation = /^.{6,}$/
    return passwordValidation.test(password)
}

export const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}
