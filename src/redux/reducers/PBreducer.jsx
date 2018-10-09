export default function currency (state = [], action) {
    switch(action.type) {
        case 'CURRENCY':
            return action.data
        default:
            return state
    }
}