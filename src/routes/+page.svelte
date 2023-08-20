<script>
</script>

<svelte:head>
	<title>moneyboys II</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="w-[100dvw] h-[100dvh] flex justify-center items-center relative">
	<div>
	  <h1 class="font-bold text-[128px]">moneyboys II</h1>
	  <h2 class="text-lg">
		enter your boys ID and see what your season II boy looks like.
	  </h2>
	  <form class="flex gap-2 mt-16">
		<input
		  pattern="\d*"
		  placeholder="eg. 2342"
		  class="rounded px-4 py-2 w-32 text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
		  min={1}
		  max={4443}
		  maxLength={4}
		/>
		<button class="font-bold px-4 py-2 rounded bg-gradient-to-br from-main-purple via-main-pink  to-main-purple">
		  show me!
		</button>
	  </form>
	</div>
  </main>