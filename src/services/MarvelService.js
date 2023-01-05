class MarvelService {
	getResource = async (url) => {
		let res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
		return await res.json();
	};

	getAllCharacters = () => {
		return this.getResource(
			"https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=250&apikey=46ea0bd747b4d07e18e23bcabedfe153"
		);
	};
}

export default MarvelService;
