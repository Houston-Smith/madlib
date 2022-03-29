console.log("You look marvelous!");

//story
// It had been a hard, {adjective} day on the {silly word} trail. The cowboys drove a herd of {plural noun} across the dry plains, kicking up {noun} along the way as they looked for somewhere to bed down.

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", event => {
	if(event.target.id.startsWith("tellStory")){
		const madlib = {
			adjective: document.querySelector("input[name='adjectiveInput']").value,
			sillyword: document.querySelector("input[name='sillyWordInput']").value,
			pluralnoun: document.querySelector("input[name='pluralNounInput']").value,
			noun: document.querySelector("input[name='nounInput']").value
		}
		//set/save to sessionStorage
		console.log(madlib)
		setDataToStorage(madlib)
		//invoke renderStory
		renderStory()
	}
})

const getDataFromStorage = (dataKey) => {
	return JSON.parse(sessionStorage.getItem(dataKey))
	//use JSON.parse()
}

const setDataToStorage = (dataObj) => {
	sessionStorage.setItem("madlib", JSON.stringify(dataObj))
	//use JSON.stringify()

}

const clearStorage = (dataKey) => {
	sessionStorage.removeItem(dataKey);
}

const renderInputs = () => {
	clearStorage('madlib')
	// show inputs fields
	//show 'Tell Story' button
mainElement.innerHTML = `
<div class= "inputField">
	<input type="text" name="adjectiveInput" value="">Adjective</input>
	<input type="text" name="sillyWordInput" value="">Silly Word</input>
	<input type="text" name="pluralNounInput" value="">Plural Noun</input>
	<input type="text" name="nounInput" value="">Noun</input>
	<button id="tellStory">Tell Story</button>
</div>	
	`
}

const renderStory = () => {
	//get from sessionStorage
	let lib = getDataFromStorage('madlib')
	//show the story
	mainElement.innerHTML = `
	<div class="libField">
		<p>
			It had been a hard, ${lib.adjective} day on the ${lib.sillyword} trail. The cowboys drove a herd of ${lib.pluralnoun} 
			across the dry plains, kicking up ${lib.noun} along the way as they looked for somewhere to bed down.
		</p>
		<button id="startOver">Start Over</button>
	</div>
`
	//show startOver button
	//startOver will invoke renderInputs()

	mainElement.addEventListener("click", event => {
		if(event.target.id.startsWith("startOver")){
			renderInputs()
		}
	})	
}

renderInputs();
