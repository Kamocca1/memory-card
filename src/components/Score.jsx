import { useEffect, useState } from "react";

export default function Score({
    setSelectedCards,
    selectedCards,
    score,
    setScore,
}) {
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        const handleScoreChange = () => {
            selectedCards.filter((pokeID, idx) => {
                if (selectedCards.indexOf(pokeID) !== idx) {
                    console.log("Game Over");
                    setScore(0);
                    setHighScore((prevHighScore) =>
                        Math.max(prevHighScore, score)
                    );
                    setSelectedCards([]);
                } else if (selectedCards.length > 0) {
                    setScore(score + 1);
                    console.log(
                        `Selected Pokémon ID: ${pokeID}, Index: ${idx}`
                    );
                }
                console.log(
                    `Current Pokémon Array: ${selectedCards}, Length: ${
                        selectedCards.length
                    }, Score: ${score + 1}`
                );
            });
        };
        handleScoreChange();
    }, [selectedCards]);

    return (
        <section className="score-section font-bitcount text-[1.5rem] text-white">
            <h1>Score: {score}</h1>
            <h1>High Score: {highScore}</h1>
        </section>
    );
}
