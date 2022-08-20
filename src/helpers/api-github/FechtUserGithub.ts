async function FechtUserGithub(nameUser:string) {
    const baseUrl = `https://api.github.com/users/${nameUser}` ;
    let objReturn: {code:number,status:boolean} = {code:0,status:false};
    const response = await fetch(baseUrl);
    if (response.status == 200) {
        const objUser = await response.json();
        return objUser;
    }else{
        objReturn.status = false
        objReturn.code = response.status
        return objReturn;
    }

}
export default FechtUserGithub;