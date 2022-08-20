import FechtUserGithub from './FechtUserGithub'


 async function GetReposbyUser(nameUser:string){
    let user = FechtUserGithub(nameUser);
    let objReturn: {code:number,status:boolean} = {code:0,status:false};
    return await user.then(async value =>{
        
        if (value.status == false) {
            return value
        }else{
            const response = await fetch(value.repos_url);
            if (response.status == 200) {
                const objUser = await response.json();
                return objUser;
            }else{
                objReturn.status = false
                objReturn.code = response.status
                return objReturn;
                
            }
        }
    })
 
}
export default GetReposbyUser