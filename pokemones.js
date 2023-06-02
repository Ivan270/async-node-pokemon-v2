const functions = require('./functions');
const pokemones = require('./pokemones/array_pokemones.js');

const randomNumber = (maxNum) => Math.floor(Math.random() * maxNum - 1);

const leerPokemones = async () => {
	const arrayPokemones = pokemones.pokemones;
	let randomIndex = Math.abs(randomNumber(arrayPokemones.length));
	let nombrePokemon = arrayPokemones[randomIndex];
	functions.leerPokemon(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
};
leerPokemones();
