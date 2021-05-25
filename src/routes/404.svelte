<script lang="ts">
	import Greeting from '@components/Greeting.svelte';
	import GoogleSearchBar from '@components/GoogleSearchBar/index.svelte';
</script>

<svelte:head>
	<title>{'Page not found'}</title>
	<style>
		body {
			margin: 0px;
		}
	</style>
</svelte:head>

<div>
	<p>{'Page not found'}</p>
</div>

<style>
	div {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
