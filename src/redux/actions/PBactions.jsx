import axios from 'axios';

export const currencyHendler = (data) => ({
    type: 'CURRENCY',
    data,
})

const url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

export const currencyRequest = () => dispatch => {
    axios.get(url)
        .then(res => dispatch(currencyHendler(res.data), console.log(res.data)))
        .catch(err => {
            console.error(err)
        })
}