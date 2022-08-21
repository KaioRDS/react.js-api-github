async function GetBranchsByRepository(urlRepos : string){

    const promisse = await fetch(urlRepos);
    const branchs = await promisse.json();
    return branchs;
}
export default GetBranchsByRepository;