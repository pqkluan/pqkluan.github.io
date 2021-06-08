<script lang="ts">
	import IconButton, { Icon } from '@smui/icon-button';
	import { mdiGithub } from '@mdi/js';
	import Svg from '@smui/common/Svg.svelte';

	const href = 'https://github.com/pqkluan/pqkluan.github.io';
</script>

<IconButton {href} target={'_blank'} aria-label={'Github Icon'}>
	<Icon component={Svg} viewBox="0 0 24 24">
		<path fill="currentColor" d={mdiGithub} />
	</Icon>
</IconButton>
