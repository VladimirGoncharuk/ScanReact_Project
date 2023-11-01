import $api from "../http";


export default class Authservice{
   
static async login(login,password){
return ($api.post('/api/v1/account/login',{login,password}))
  .catch(function (error) {
    console.log(error.toJSON());
  });
    }

static async infocompany(){
return ($api.get('/api/v1/account/info'))
  .catch(function (error) {
    console.log(error);
  });
    }

  static async searchcompany(searchcompanyBody){
    
return ($api.post('/api/v1/objectsearch/histograms',searchcompanyBody))
  .catch(function (error) {
    console.log(error);
  });
    }

    static async searchcompanyId(searchcompanyBody){
    
      return ($api.post('/api/v1/objectsearch',searchcompanyBody))
        .catch(function (error) {
          console.log(error);
        });
          }   

          static async searchcompanyContent({ids}){
    
            return ($api.post('/api/v1/documents',{ids}))
              .catch(function (error) {
                console.log(error);
              });
                }  



}




