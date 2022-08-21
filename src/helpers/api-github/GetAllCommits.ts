async function GetAllCommits(url : string){

    const baseUrl = url.substr(0,url.indexOf('{'))
    
    const promisse = await fetch(baseUrl);
    const response = await promisse.json();
    return response;

}
export default GetAllCommits;