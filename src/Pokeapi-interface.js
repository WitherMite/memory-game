import pokeballImg from "./assets/official-artwork-pokeball.png";

// Add cache?

export default class PokeApiInterface {
  // TODO: Error handling
  // when errors are handled and not thrown up to components, it causes an infinite loop... unsure how to fix.
  static async #getResource(url) {
    const response = await fetch(url);
    const resource = await response.json();
    return resource;
  }

  static async #createCardList() {
    const allPokemon = await this.#getResource(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    );
    return allPokemon.results.map(this.#createCard, this);
  }

  static #createCard(pokemon, index) {
    const getPokemonInfo = async () => await this.#getResource(pokemon.url);
    // can use index as id, as pokemon are always listed in pokedex order
    const card = {
      id: index,
      title: capitalizeName(pokemon.name),
      description: null,
      imgUrl: null,
      async getDetails() {
        const info = await getPokemonInfo();
        const species = await PokeApiInterface.#getResource(info.species.url);
        // find last gets newest entry, old ones have strange formatting
        const flavorTextEntry = species.flavor_text_entries.findLast(
          (entry) => entry.language.name === "en"
        );
        const image =
          info.sprites.other["official-artwork"].front_default ||
          info.sprites.other.dream_world.front_default ||
          info.sprites.front_default ||
          pokeballImg;
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

function capitalizeName(name) {
  const words = name.split("-");
  return words
    .map((word) => {
      const chars = word.split("");
      chars[0] = chars[0].toUpperCase();
      return chars.join("");
    })
    .join(" ");
}
