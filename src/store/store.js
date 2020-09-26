import { createStore, combineReducers, applyMiddleware} from 'redux'
import newsReducer from '../reducer/reducer'
import thunk from 'redux-thunk'

const configStore = () =>
{
    const store = createStore((combineReducers({
                news: newsReducer
    })), applyMiddleware(thunk))
    return store    
}

export default configStore