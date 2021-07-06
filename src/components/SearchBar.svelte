<script lang="ts">
	import { onMount } from 'svelte';
	import { Input } from '@smui/textfield';
	import Card from '@smui/card';
	import { Icon } from '@smui/common';

	import { fetchAutocompleteSuggestions, makeSearchUrl } from '@resources/google';
	import debounce from '@utils/debounce';

	let value = '';
	let inputElement: HTMLInputElement;
	let currentFocus = -1;
	let suggestKeyWord = '';
	let selectedKeyword = '';

	const updateSuggestKeyword = debounce((input: string) => (suggestKeyWord = input), 250);

	$: updateSuggestKeyword(value);
	$: promise = fetchAutocompleteSuggestions(suggestKeyWord);
	$: !!selectedKeyword && window.open(makeSearchUrl(selectedKeyword), '_self');

	onMount(() => setTimeout(inputElement.focus, 100));

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
			if (currentFocus === -1) selectedKeyword = value;
			// TODO: should have better way than this?
			else elements[currentFocus].click();
		} else {
			if (e.key === 'ArrowDown') currentFocus = currentFocus + 1;
			else if (e.key === 'ArrowUp') currentFocus = currentFocus - 1;

			if (currentFocus >= elements.length) currentFocus = 0;
			if (currentFocus < -1) currentFocus = elements.length - 1;
		}

		e.preventDefault();
	}

	/**
	 * TODO:
	 * 1. Reflect input value when select suggestion using keyboard
	 * 2. Hover on suggestion should apply focus effect but not text update
	 * 3. Change the fetch suggestion logics
	 * 4. Update search button display logic
	 * 6. focus should highlight the card
	 */

	const urlParams = new URLSearchParams(window.location.search);
	const queryStr = urlParams.get('q');
</script>

<div class="input-container">
	<Card class="input-card" variant="outlined">
		<Icon class="material-icons">{'search'}</Icon>

		<Input
			bind:this={inputElement}
			class="input-textfield"
			placeholder="Search"
			bind:value
			on:keydown={handleKeyDown}
			type="text"
			autoFocus
		/>
	</Card>

	{#await promise then suggestions}
		{#if Array.isArray(suggestions) && suggestions.length !== 0 && value.length !== 0}
			<div id={'autocomplete-list'} class={'autocomplete-items'}>
				{#each suggestions as suggestion, i}
					<div
						class={currentFocus === i ? 'autocomplete-active' : ''}
						on:click={() => (selectedKeyword = suggestion)}
					>
						<Icon class="material-icons">{'search'}</Icon>
						{@html `${value}<b>${suggestion.substring(value.length)}</b>`}
					</div>
				{/each}
			</div>
		{/if}
	{:catch error}
		<p style={'color: red'}>{error.message}</p>
	{/await}
</div>

<!-- TODO: styling is a mess, should be clean up after learn a bit of css -->
<style>
	.input-container {
		display: inline-block;
		position: relative;
		margin: 8px 16px 8px 16px;
	}

	* :global(.input-card) {
		display: flex;
		flex-direction: row;
		align-items: center;

		flex-grow: 1;
		max-width: 480px;
		min-width: 280px;
		padding: 0px 12px 0px 0px;
		height: 48px;
	}

	* :global(.input-card > .material-icons) {
		opacity: 0.72;

		margin: 0px 12px;
	}

	* :global(.autocomplete-items > div > .material-icons) {
		opacity: 0.32;
		margin: 0px 12px;
	}

	* :global(.input-textfield) {
		font-family: 'Open Sans', sans-serif;
	}

	* :global(.input-textfield::placeholder) {
		opacity: 0.6;
	}

	.autocomplete-items {
		display: flex;
		flex-direction: column;

		border: 1px solid #e0e0e0;
		border-bottom: none;
		border-top: none;
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		z-index: 99;
	}

	.autocomplete-items div {
		display: flex;
		flex-direction: row;
		align-items: center;

		padding: 8px 12px 8px 0px;
		border-bottom: 1px solid #e0e0e0;
		cursor: pointer;
		font-family: 'Open Sans', sans-serif;
		background-color: var(--mdc-theme-surface, #fff);

		white-space: pre;
	}

	.autocomplete-active {
		background-color: var(--mdc-theme-primary, #546e7a) !important;
		color: #ffffff;
	}

	* :global(.autocomplete-items > .autocomplete-active > .material-icons) {
		opacity: 1;
	}
</style>
