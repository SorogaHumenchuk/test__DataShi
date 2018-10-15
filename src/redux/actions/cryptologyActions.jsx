import axios from 'axios';

export const cryptHendler = (data) => ({
    type: 'CRYPT',
    data
})

const url = 'https://api.coinmarketcap.com/v2/ticker/?start=1&limit=10&sort=id&structure=array';

export const cryptRequest = () => dispatch => {
    axios.get(url)
        .then(res => dispatch(cryptHendler(res.data.data), console.log(res.data.data)))
        .catch(err => {
            console.error(err)
        })
}