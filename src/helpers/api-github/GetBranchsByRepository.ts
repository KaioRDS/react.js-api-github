async function GetBranchsByRepository(urlRepos : string){

    const promisse = await fetch(urlRepos);
    const branchs = await promisse.json();
    branchs.then(value =>
        {
            console.log(value)
        })
}
export default GetBranchsByRepository;