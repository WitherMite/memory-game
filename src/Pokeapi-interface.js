export default class PokeApiInterface {
  static async #getResource(url) {
    return fetch(url)
      .then((r) => r.json())
      .then((r) => r);
  }

  static async #createCardList() {
    const allPokemon = await this.#getResource(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );

    const cardList = [];
    let i = 0;
    for await (const pokemon of allPokemon.results) {
      const card = await this.#createCard(pokemon, i++);
      cardList.push(card);
    }
    return cardList;
  }

  static async #createCard(pokemon, index) {
    const getPokemonInfo = async () => await this.#getResource(pokemon.url);
    // can use index as id, as pokemon are always listed in pokedex order
    const card = {
      id: index,
      title: pokemon.name,
      description: null,
      imgUrl: null,
      async getDetails() {
        const info = await getPokemonInfo();
        const species = await PokeApiInterface.#getResource(info.species.url);
        const flavorTextEntry = species.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );
        const image =
          info.sprites.other["official-artwork"].front_default ||
          info.sprites.other.dream_world.front_default ||
          info.sprites.front_default;
        [card.imgUrl, card.description] = [image, flavorTextEntry.flavor_text];
        return [card.imgUrl, card.description];
      },
    };
    return card;
  }

  async init() {
    this.cardList = await PokeApiInterface.#createCardList();
  }
}
