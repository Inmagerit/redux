import { configureStore } from '@reduxjs/toolkit';


import reducers from "./reducers/index.js";

 const store = configureStore(reducers,{}
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 )
 

export default store