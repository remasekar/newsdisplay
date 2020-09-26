let valuesinitial = {}

const newsReducer = ( state = valuesinitial, action ) => {
    switch(action.type)
    {   
        case 'LOAD_NEWS' :
        return { ...valuesinitial,...action.payload}
        default:
        return { ...state}
    }
}

export default newsReducer