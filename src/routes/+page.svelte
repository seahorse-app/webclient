<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;
</script>

<h1>Hi {data.user.firstName}</h1>
