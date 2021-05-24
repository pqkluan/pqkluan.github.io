<script>
	import { onMount } from 'svelte';

	let inputElement;
	// TODO: this field should be rehydrate when back
	let keyword = '';
	$: disabled = !keyword;

	let dump = '';

	onMount(() => inputElement?.focus());

	function handleSearch() {
		if (!keyword) return;
		// window.open(`https://www.google.com/search?q=${encodeURI(keyword)}`, '_self');

		fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURI(keyword)}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				dump = JSON.stringify(res, undefined, 2);
			})
			.catch(console.error);
	}
</script>

<form on:submit|preventDefault={handleSearch}>
	<input
		bind:value={keyword}
		bind:this={inputElement}
		on:submit={handleSearch}
		placeholder={'Search for something?'}
	/>
	<button type="submit" {disabled}>{'Search'}</button>
</form>

<p>{dump}</p>

<style>
	form {
		display: flex;
		flex-direction: row;
	}
	input {
		padding: 8px;
	}
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
	}
</style>
