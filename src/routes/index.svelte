<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';

	import GibhubIcon from '@components/GithubIcon.svelte';
	import Greeting from '@components/Greeting.svelte';
	import SearchBar from '@components/SearchBar.svelte';

	const title = 'Home';
</script>

<svelte:head>
	<title>{title}</title>
	<style>
		body {
			margin: 0px;
		}
	</style>
</svelte:head>

<TopAppBar variant="static">
	<Row>
		<Section>
			<Title>{title}</Title>
		</Section>

		<Section align="end">
			<GibhubIcon />
		</Section>
	</Row>
</TopAppBar>

<div class="container">
	<Greeting />
	<SearchBar />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		flex: 1;
		align-items: center;
		justify-content: center;
	}
</style>
