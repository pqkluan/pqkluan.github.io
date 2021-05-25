<script lang="ts">
	import { onMount } from 'svelte';
	import fetchSuggestions from './fetchSuggestions';
	import debounce from './debounce';

	let inputElement;
	// TODO: this field should be rehydrate when back

	let keyword = '';
	$: disabled = !keyword;

	let suggestKeyWord = '';
	const updateSuggestKeyword = debounce((input: string) => (suggestKeyWord = input), 250);
	$: updateSuggestKeyword(keyword);
	$: promise = fetchSuggestions(suggestKeyWord);

	let selectedKeyword = '';
	// useEffect to trigger search when selectedKeyword updated
	$: !!selectedKeyword && window.open(buildGoogleSearchUrl(selectedKeyword), '_self');

	let selectedIndex = -1;

	onMount(() => inputElement?.focus());

	function buildGoogleSearchUrl(q) {
		return `https://www.google.com/search?q=${encodeURI(q)}`;
	}

	// function autocomplete(inp, arr) {
	// 	// inp.addEventListener('keydown', function );

	// 	function addActive(x) {
	// 		/*a function to classify an item as "active":*/
	// 		if (!x) return false;
	// 		/*start by removing the "active" class on all items:*/
	// 		removeActive(x);
	// 		if (currentFocus >= x.length) currentFocus = 0;
	// 		if (currentFocus < 0) currentFocus = x.length - 1;
	// 		/*add class "autocomplete-active":*/
	// 		x[currentFocus].classList.add('autocomplete-active');
	// 	}

	// 	function removeActive(x) {
	// 		/*a function to remove the "active" class from all autocomplete items:*/
	// 		for (var i = 0; i < x.length; i++) {
	// 			x[i].classList.remove('autocomplete-active');
	// 		}
	// 	}

	// 	function closeAllLists(elmnt) {
	// 		/*close all autocomplete lists in the document,
	//   except the one passed as an argument:*/
	// 		var x = document.getElementsByClassName('autocomplete-items');
	// 		for (var i = 0; i < x.length; i++) {
	// 			if (elmnt != x[i] && elmnt != inp) {
	// 				x[i].parentNode.removeChild(x[i]);
	// 			}
	// 		}
	// 	}
	// 	/*execute a function when someone clicks in the document:*/
	// 	document.addEventListener('click', function (e) {
	// 		closeAllLists(e.target);
	// 	});
	// }
</script>

<form on:submit|preventDefault={() => (selectedKeyword = keyword)} autocomplete="off">
	<div class="autocomplete" style="width:300px;">
		<input
			bind:value={keyword}
			bind:this={inputElement}
			on:keydown={(e) => {
				if (e.defaultPrevented) return;

				const pressedKey = e.key;

				if (pressedKey === undefined) {
					e.preventDefault();
					return;
				}

				if (pressedKey === 'ArrowDown') {
				} else if (pressedKey === 'ArrowUp') {
				}

				switch (e.key) {
					case 'ArrowDown': {
						return;
					}
					case 'ArrowUp': {
						return;
					}
				}

				console.log(pressedKey);
				// var x = document.getElementById(this.id + 'autocomplete-list');
				// if (x) x = x.getElementsByTagName('div');
				// if (e.keyCode == 40) {
				// 	/*If the arrow DOWN key is pressed,
				//   increase the currentFocus variable:*/
				// 	currentFocus++;
				// 	/*and and make the current item more visible:*/
				// 	addActive(x);
				// } else if (e.keyCode == 38) {
				// 	//up
				// 	/*If the arrow UP key is pressed,
				//   decrease the currentFocus variable:*/
				// 	currentFocus--;
				// 	/*and and make the current item more visible:*/
				// 	addActive(x);
				// } else if (e.keyCode == 13) {
				// 	/*If the ENTER key is pressed, prevent the form from being submitted,*/
				// 	e.preventDefault();
				// 	if (currentFocus > -1) {
				// 		/*and simulate a click on the "active" item:*/
				// 		if (x) x[currentFocus].click();
				// 	}
				// }
			}}
			type="text"
			placeholder={'Search for something?'}
		/>

		{#await promise then suggestions}
			{#if Array.isArray(suggestions) && suggestions.length !== 0 && keyword.length !== 0}
				<div id={'autocomplete-list'} class={'autocomplete-items'}>
					{#each suggestions as suggestion}
						<div on:click={() => (selectedKeyword = suggestion)}>
							{@html `<b>${keyword}</b>${suggestion.substr(keyword.length)}`}
							<input type="hidden" value={suggestion} />
						</div>
					{/each}
				</div>
			{/if}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>

	<button type="submit" {disabled}>{'Search'}</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: row;
	}

	/*
	button {
		margin-left: 8px;
		padding: 8px;
		background-color: cornflowerblue;
		color: white;
		border-radius: 2px;
		outline: none;
		border: none;
	}
	button:disabled {
		background-color: grey;
	} */

	.autocomplete {
		/*the container must be positioned relative:*/
		position: relative;
		display: inline-block;
	}
	input {
		border: 1px solid transparent;
		background-color: #f1f1f1;
		padding: 8px;
		font-size: 16px;
	}

	button {
		border: 1px solid transparent;
		background-color: #f1f1f1;
		padding: 8px;
		font-size: 16px;
		background-color: DodgerBlue;
		color: #fff;
	}

	.autocomplete-items {
		position: absolute;
		border: 1px solid #d4d4d4;
		border-bottom: none;
		border-top: none;
		z-index: 99;
		/*position the autocomplete items to be the same width as the container:*/
		top: 100%;
		left: 0;
		right: 0;
	}
	.autocomplete-items div {
		padding: 10px;
		cursor: pointer;
		background-color: #fff;
		border-bottom: 1px solid #d4d4d4;
	}
	.autocomplete-items div:hover {
		/*when hovering an item:*/
		background-color: #e9e9e9;
	}
	.autocomplete-active {
		/*when navigating through the items using the arrow keys:*/
		background-color: DodgerBlue !important;
		color: #ffffff;
	}
</style>
