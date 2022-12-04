import { ADD_PERSON } from "../constant";

const initState = [{id: '001', name: 'Tom', age: 18}];

export default function personReducer(preState = initState, action) {
    const {type, data} = action;
    switch (type) {
        case ADD_PERSON:
            preState = [data, ...preState];
            break;
        default:
            break;
    }

    return preState;
}
