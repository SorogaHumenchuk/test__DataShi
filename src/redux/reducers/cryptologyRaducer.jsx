export default function cryptology (state = [], action) {
    switch(action.type) {
        case 'CRYPT':
            return action.data
        default:
            return state
    }
}