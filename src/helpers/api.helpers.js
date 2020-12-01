import axios from 'axios';
const URL_API = 'http://localhost:3000';

async function login(email, password) {
    try {
        const response = await axios.post(URL_API + '/login', {
            email,
            password: password,
        })
        const { data: { token } } = response.data
        return [null, token];
    } catch (error) {

    }
}

async function register(name, email, password, confirm_pass) {
    try {
        const response = await axios.post(URL_API + '/login', {
            email,
            password: password,
            name,
            confirm_pass
        })
        const { data } = response.data
        return [null, data];
    } catch (error) {
        return [error, null]
    }
}

async function checkValidateAuth(token) {
    try {
        const url = `${URL_API}/validate`
        const response = await axios.get(
            url,
            {
                headers: { 'Authorization': token },
            }
        )
        const { data } = response.data
        return [null, data];
    } catch (error) {
        return [error, null]
    }
}

export default {
    login,
    register,
    checkValidateAuth
}
