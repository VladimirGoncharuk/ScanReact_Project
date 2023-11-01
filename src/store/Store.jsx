import {makeAutoObservable} from 'mobx';
import Authservice from '../services/Authservice';

export default class Store {

    isAuth = false;
    isLoading = false;
    companyUse;
    companyLimit;
    searchcompanyData;
    searchcompanyDataId;
    searchcompanyDataInfo;
    searchcompanyBody;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool;
    }
    setisLoading(bool) {
        this.isLoading = bool;
    }

    setSearchcompanyBody(searchcompanyBody) {
        this.searchcompanyBody = searchcompanyBody
    }
     totalCount(documents){
        let total=0
        for (let document of documents) {
          total+=document.value
        } 
    
        return total
      }

    async login(login, password) {
        try {
            const response = await Authservice.login(login, password);

            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('tokenexpire', response.data.expire);
            this.setAuth(true)

        } catch  {
            console.log('Не авторизован!')
            this.setAuth(false);
        }
    }

    async infocompany() {
        this.setisLoading(true);
        try {
            const response = await Authservice.infocompany();
            this.companyUse = response.data.eventFiltersInfo.usedCompanyCount;
            this.companyLimit = response
                .data
                .eventFiltersInfo
                .companyLimit
        } catch  {
            console.log('Информации недоступна!')

        } finally {
            this.setisLoading(false);
        }
    }

    async searchcompany(searchcompanyBody) {
        this.setisLoading(true);
        try {
            const response = await Authservice.searchcompany(searchcompanyBody)
            this.searchcompanyData =this.totalCount(response.data.data[0].data);
            console.log(response)
            
            return response.data
        } catch  {
            console.log('Информации недоступна!')

        } finally {
            this.setisLoading(false);
        }
    }

    async searchcompanyId(searchcompanyBody) {

        try {

            const response = await Authservice.searchcompanyId(searchcompanyBody);
            this.searchcompanyDataId = response.data;
            console.log(response)
            return response.data
        } catch  {
            console.log('Информации недоступна!')

        }
    }

    async searchcompanyContent(ids) {

        try {
            const response = await Authservice.searchcompanyContent({ids});
            this.searchcompanyDataInfo = response
            console.log(response)
            return response

        } catch  {
            console.log('Информации недоступна!')

        }
    }

    logout() {
        try {

            localStorage.removeItem('token');
            localStorage.removeItem('tokenexpire');
            this.setAuth(false);

        } catch  {
            console.log('Деавторизация не проведена!')

        }
    }
    AuthCheck() {
        if ((localStorage.getItem('tokenexpire') != null) && ((+new Date(localStorage.getItem('tokenexpire'))) - (+Date.now()) > 0)) 
            this.setAuth(true)
        else 
            this.setAuth(false)
    }

}
