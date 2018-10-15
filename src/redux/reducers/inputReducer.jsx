export default function value (state='', action) {
    switch(action.type) {
        case 'INPUT_VALUE':
            return action.data
        default:
            return state
    }
}