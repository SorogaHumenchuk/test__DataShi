export default function inputs (state = {email: '', password: '', name: ''}, action) {
    switch(action.type) {
        case 'EMAIL':
            return {...state, email: action.value}
        case 'PASSWORD':
            return {...state, password: action.value}
        case 'NAME':
            return {...state, name: action.value}
        case 'CLEAN': 
            return {email: '', password: '', name: ''}
        default: 
            return state
    }
}