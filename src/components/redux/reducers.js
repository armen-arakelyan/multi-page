import {combineReducers} from 'redux';
import basketReducer from './basket/reducer';
import imgGallery from './imgGallery/reducer';
import feedData from './feed/reducer'

const rootReducer=combineReducers({
    count:basketReducer,
    img:imgGallery,
    feed:feedData,
})

export default rootReducer