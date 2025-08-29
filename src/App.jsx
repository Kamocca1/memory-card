import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Score from "./components/Score";

function App() {
    return (
        <>
            <header>
                <img src={reactLogo} alt="React logo" />
                <Score />
            </header>
            <main>
                <p>Card Section</p>
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
