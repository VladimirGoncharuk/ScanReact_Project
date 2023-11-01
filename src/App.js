import React from 'react';
import Main from "./screens/Main/Main";
import Authorization from "./screens/Authorization/Authorization";
import Search from "./screens/Search/Search";
import ResultSearch from "./screens/ResultSearch/ResultSearch";
import { Route,  Routes } from 'react-router-dom';
import Notfound from './screens/Notfound/Notfound';
import Layout from './components/Layout';
import Store from './store/Store';
import { createContext } from 'react';
import AuthCheck from './components/CheckAuth';

const store =new Store();
export const Context = createContext({store})

function App(){
    return(
        <>
        <Context.Provider value={{store}}>
        <Routes>
            <Route path='/' element={<Layout/>}>
                
                <Route index element={<Main/>}/>
                <Route path='tariff' element={<Notfound/>}/>
                <Route path='FAQ' element={<Notfound/>}/>
                <Route path='authorization' element={<Authorization/>}/>
                <Route path='searchData' element={
                    <AuthCheck>
                        <Search/>       
                    </AuthCheck>
                    }/>
                <Route path='resultsearch' element={<ResultSearch/>}/>
                <Route path='*' element={<Notfound/>}/>

            </Route>

        </Routes>
        </Context.Provider>
        
        </>
    )
} 
export default App;
