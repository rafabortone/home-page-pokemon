const ListPokemon = () => {

  const list = []

  async function fetchApi() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();  
    data.results.map(async item => {
      this.getPokemon(item.url);
    })
  }

  async function getPokemon(url) {
    const response = await fetch(url);
    const data = await response.json();
    if(!data) return null
    list.push(data)
  }

  return(
    <></>
  )
}
export default ListPokemon;