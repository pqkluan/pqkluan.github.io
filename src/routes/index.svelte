<script lang="ts">
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';

	import GibhubIcon from '@components/GithubIcon.svelte';
	import GoogleSearchBar from '@components/GoogleSearchBar/index.svelte';
	import Greeting from '@components/Greeting.svelte';

	const title = 'Home';
	let topAppBar: TopAppBar;
</script>

<svelte:head>
	<title>{title}</title>
	<style>
		body {
			margin: 0px;
		}
	</style>
</svelte:head>

<TopAppBar bind:this={topAppBar}>
	<Row>
		<Section>
			<Title>{title}</Title>
		</Section>

		<Section align="end">
			<GibhubIcon />
		</Section>
	</Row>
</TopAppBar>

<AutoAdjust {topAppBar}>
	<div class={'container'}>
		<Greeting />
		<GoogleSearchBar />
	</div>
</AutoAdjust>

<style>
	.container {
		height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
