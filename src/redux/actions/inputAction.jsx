import axios from 'axios';
export const email = (value) => ({
    type: 'EMAIL',
    value,
})
export const password = (value) => ({
    type: 'PASSWORD',
    value,
})
export const name = (value) => ({
    type: 'NAME',
    value,
})
export const inputCleaner = () => ({
    type: 'CLEAN'
})

export const registr = () => dispatch => {
    return axios.get('http://localhost:8000/registration')
        .then(result => console.log(result))
        .catch(err => {
            console.error(err)
        }
    )
}