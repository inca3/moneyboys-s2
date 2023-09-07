<script>
	import { moneyboys, search, boy, gmSelected, gmSollessSelected } from '../stores';
	import { goto } from '$app/navigation';

	const handleSubmit = () => {
		if ($search == '') return;
		boy.set($moneyboys.filter((item) => item.name.endsWith(`#${$search}`)).at(0));
		goto(`boy/${$boy.crawl_id}`);
	};
</script>

<svelte:head>
	<title>moneyboys II</title>
	<meta name="description" content="moneyboys s2 builder" />
</svelte:head>

<main class="container w-[100dvw] h-[100dvh] flex justify-center items-center relative">
	<div>
		<h1 class="font-bold text-4xl md:text-8xl lg:text-[128px]">moneyboys II</h1>
		<h2 class="text-lg mt-8">enter your boys ID and see what your season II boy looks like.</h2>
		<form class="flex gap-2 mt-16" on:submit|preventDefault={handleSubmit}>
			<input
				pattern="\d*"
				placeholder="eg. 2342"
				class="rounded px-4 py-2 w-32 text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
				min={1}
				max={4443}
				maxLength={4}
				on:input={(e) => search.set(e.target.value)}
			/>
			<button
				class="font-bold px-4 py-2 rounded bg-gradient-to-br from-main-purple via-main-pink to-main-purple"
			>
				show me!
			</button>
		</form>
		<div class="flex items-center justfiy-center gap-1 mt-4">
			<input
				type="checkbox"
				name="gm"
				id="gm"
				class="form-checkbox w-10 h-10 rounded-full text-main-purple"
				bind:checked={$gmSelected}
			/>
			<label for="gm" class="font-bold text-lg">gm?</label>
		</div>
		<div class="flex items-center justfiy-center gap-1 mt-4">
			<input
				type="checkbox"
				name="gmSolless"
				id="gmSolless"
				class="form-checkbox w-10 h-10 rounded-full text-main-purple"
				bind:checked={$gmSollessSelected}
			/>
			<label for="gmSolles" class="font-bold text-lg">gm sollessman edition?</label>
		</div>
	</div>
</main>
