<script lang="ts">
	import { goto } from "$app/navigation";

	let email = '';
	let password = '';

	let errorMsg = '';

	// TODO: replace with real host

	async function login() {
		let req = await fetch('http://localhost:3000/user/login', {
			method: 'POST',
            credentials: "include",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});
		let resp = await req.json();
		if (req.status != 200) {
            errorMsg = resp.error;
            return;
        }
        goto("/");
	}
</script>

<form on:submit|preventDefault={async () => await login()}>
	<input type="email" name="email" placeholder="Email" bind:value={email} />
	<input type="password" name="password" placeholder="Password" bind:value={password} />
	{#if errorMsg}
		{errorMsg}
	{/if}
	<button type="submit">Login</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
