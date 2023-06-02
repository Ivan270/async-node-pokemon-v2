const fs = require('fs/promises');
const axios = require('axios');

// Consumo API con axios
const leerData = async (url) => {
	const { data } = await axios.get(url);
	console.log(data);
};

const leerPokemon = async (url) => {
	const { data } = await axios.get(url);
	let habilidades = data.abilities;
	let habilidadesFormat = [];
	habilidades.forEach((habilidad) => {
		habilidadesFormat.push(habilidad.ability.name);
	});
	console.log(
		`El pokemon ${data.name} tiene ${
			data.base_experience
		} de experiencia base y sus habilidades son ${habilidadesFormat.join(', ')}`
	);
};

module.exports = { leerData: leerData, leerPokemon: leerPokemon };
