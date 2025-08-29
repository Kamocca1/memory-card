import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Score from "./components/Score";
import CardsSection from "./components/CardSection";

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);

    const getInitialScore = () => {
        const savedScore = localStorage.getItem("scoreKey");
        try {
            return savedScore ? JSON.parse(savedScore) : 0;
        } catch {
            console.error("Invalid score in localStorage:", savedScore);
            return 0;
        }
    };

    const [score, setScore] = useState(getInitialScore);

    useEffect(() => {
        localStorage.setItem("scoreKey", score);
    }, [score]);

    useEffect(() => {
        let pokeIndexArray = [];
        // Insert 12 numbers inside the pokeIndexArray
        for (let i = 0; i < 12; i++) pokeIndexArray.push(i);

        async function FetchData() {
            let pokeArray = [];
            let current = pokeIndexArray.length;
            let random;

            // Fisher-Yates shuffle algorithm to shuffle the array
            while (current !== 0) {
                random = Math.floor(Math.random() * current);
                current--;
                [pokeIndexArray[current], pokeIndexArray[random]] = [
                    pokeIndexArray[random],
                    pokeIndexArray[current],
                ];

                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${
                        pokeIndexArray[current] + 1
                    }`,
                    { mode: "cors" }
                );

                let pokeData = await response.json();
                // Push the pokemon data into the pokeArray
                pokeArray.push({
                    name: pokeData.name.toUpperCase(),
                    // to store random pokemon sprites
                    sprites: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                        pokeIndexArray[current] + 1
                    }.png`,
                    id: pokeData.id,
                });
            }
            setPokemonList(pokeArray);
            console.log(pokeArray);
        }
        FetchData();
        return () => {
            console.log("Clean");
        };
    }, []);

    return (
        <>
            <header>
                <img src={reactLogo} alt="React logo" />
                <Score
                    setSelectedCards={setSelectedCards}
                    selectedCards={selectedCards}
                    score={score}
                    setScore={setScore}
                    pokemonList={pokemonList}
                />
            </header>
            <main className="flex justify-center">
                <CardsSection
                    pokemonList={pokemonList}
                    setPokemonList={setPokemonList}
                    setSelectedCards={setSelectedCards}
                    setScore={setScore}
                />
            </main>
            <footer>
                <p>
                    Pokémon Memory Game &copy; {new Date().getFullYear()}{" "}
                    &mdash; Built with React. All Pokémon images &amp; names
                    &copy; Nintendo, Game Freak, and The Pokémon Company.
                </p>
            </footer>
        </>
    );
}

export default App;
