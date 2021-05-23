<script>
	import { onMount } from 'svelte';

	let inputElement;
	// TODO: this field should be rehydrate when back
	let keyword = '';
	$: disabled = !keyword;

	onMount(() => inputElement?.focus());

	function handleSearch() {
		if (!keyword) return;
		window.open(`https://www.google.com/search?q=${encodeURI(keyword)}`, '_self');
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
