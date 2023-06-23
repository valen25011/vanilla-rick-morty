export default class API{
    async getCharacter(id){
        const Response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await Response.json()
        return data
        //.then((Response) => Response.json())
       // .then((data) => console.log(data))
    }
}