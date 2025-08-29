import { useEffect } from "react";
import Card from "./Card";

export default function CardsSection({
    pokemonList,
    setPokemonList,
    setSelectedCards,
}) {
    const clickHandler = (pokeID) => {
        console.log(`Clicked Pokémon ID: ${pokeID}`);
        // Checks if the pokemon ID is null for inserting an ID in the array
        setSelectedCards((prevPokemon) =>
            pokeID != null ? [...prevPokemon, pokeID] : prevPokemon
        );
    };

    const shuffleArray = (pokemonList) => {
        // Copy the pokemonList array
        let shuffle = [...pokemonList];
        // Minus 1 to avoid overlap
        let i = shuffle.length - 1;
        let j;
        while (i > 0) {
            // Generating random number from 0 - 12
            j = Math.floor(Math.random() * (i + 1));
            // Decrement to make its loop 12 time
            i--;
            // Swapping the current cards and random cards
            [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
        }
        return shuffle;
    };

    const reloadCards = () => {
        // Reshuffle another new array of cards
        setPokemonList((prev) => shuffleArray(prev));
    };

    useEffect(() => {
        clickHandler();
    }, []);

    return (
        <section className="cards-grid">
            {pokemonList &&
                pokemonList.map((_sprites, index) => {
                    return (
                        <Card
                            key={_sprites.id}
                            _sprites={_sprites}
                            index={index}
                            clickHandler={clickHandler}
                            reloadCards={reloadCards}
                        />
                    );
                })}
        </section>
    );
}
