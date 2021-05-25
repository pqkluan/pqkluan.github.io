<script lang="ts">
	import { onMount } from 'svelte';
	import fetchSuggestions from './fetchSuggestions';
	import debounce from './debounce';

	let inputElement: HTMLInputElement;
	let currentFocus: number = -1;
	let keyword: string = ''; // TODO: this field should be rehydrate when back
	let suggestKeyWord: string = '';
	let selectedKeyword: string = '';

	const updateSuggestKeyword = debounce((input: string) => (suggestKeyWord = input), 250);

	$: disabled = !keyword;
	$: updateSuggestKeyword(keyword);
	$: promise = fetchSuggestions(suggestKeyWord);
	$: !!selectedKeyword && window.open(buildGoogleSearchUrl(selectedKeyword), '_self');

	onMount(() => inputElement?.focus());

	function buildGoogleSearchUrl(q) {
		return `https://www.google.com/search?q=${encodeURI(q)}`;
	}

	function handleKeyDown(e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		if (e.defaultPrevented) return;
		// Early exist if event.key is not support
		if (e.key === undefined) return;
		// Exit if it's not navigating keys
		if (!['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) return;

		const autoCompleteElement = document.getElementById('autocomplete-list');
		if (!autoCompleteElement) return;
		const elements = autoCompleteElement.getElementsByTagName('div');
		if (!elements) return;

		if (e.key === 'Enter') {
			if (currentFocus === -1) selectedKeyword = keyword;
			// TODO: should have better way than this?
			else elements[currentFocus].click();
		} else {
			if (e.key === 'ArrowDown') {
				currentFocus = currentFocus + 1;
			} else if (e.key === 'ArrowUp') {
				currentFocus = currentFocus - 1;
			}

			if (currentFocus >= elements.length) currentFocus = 0;
			if (currentFocus < -1) currentFocus = elements.length - 1;
		}

		e.preventDefault();
	}
</script>

<form on:submit|preventDefault={() => (selectedKeyword = keyword)} autocomplete="off">
	<div class="input-container">
		<input
			class={'input-search-box'}
			bind:value={keyword}
			bind:this={inputElement}
			on:keydown={handleKeyDown}
			type="text"
			placeholder={'Search for something?'}
		/>

		{#await promise then suggestions}
			{#if Array.isArray(suggestions) && suggestions.length !== 0 && keyword.length !== 0}
				<div id={'autocomplete-list'} class={'autocomplete-items'}>
					{#each suggestions as suggestion, i}
						<div
							class={currentFocus === i ? 'autocomplete-active' : ''}
							on:click={() => (selectedKeyword = suggestion)}
						>
							<b>{keyword}</b>{suggestion.substr(keyword.length)}
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
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

	form {
		display: flex;
		flex-direction: row;
	}

	.input-container {
		/*the container must be positioned relative:*/
		display: inline-block;
		position: relative;
	}

	.input-search-box {
		min-width: 360px;
		background-color: #f1f1f1;
		border: 1px solid #d4d4d4;
		font-family: 'Open Sans', sans-serif;
		font-size: 16px;
		padding: 8px;
	}

	button {
		background-color: cornflowerblue;
		border: 1px solid transparent;
		color: white;
		font-family: 'Open Sans', sans-serif;
		font-weight: bold;
		font-size: 16px;
		margin-left: 4px;
		padding: 8px;
	}

	button:disabled {
		background-color: gray;
	}

	.autocomplete-items {
		border-bottom: none;
		border-top: none;
		border: 1px solid #d4d4d4;
		left: 0;
		position: absolute;
		right: 0;
		top: 100%;
		z-index: 99;
	}
	.autocomplete-items div {
		background-color: white;
		border-bottom: 1px solid #d4d4d4;
		cursor: pointer;
		font-family: 'Open Sans', sans-serif;
		padding: 8px;
	}
	.autocomplete-active {
		background-color: cornflowerblue !important;
		color: #ffffff;
	}
</style>
