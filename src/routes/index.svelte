<script>
	import Greeting from '../components/Greeting.svelte';
	import GoogleSearchBar from '../components/GoogleSearchBar.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<style>
		body {
			margin: 0px;
		}
	</style>
</svelte:head>

<div>
	<Greeting />
	<GoogleSearchBar />
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
