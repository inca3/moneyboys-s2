<script>
	import { onMount } from 'svelte';
	import { boy } from '../../../stores';
	import Loading from '../../../lib/Loading.svelte';
	import mergeImages from 'merge-images';
	import Back from '../../../lib/assets/back.png';

	let generatedImage;
	let isLoading = true;

	onMount(() => {
		const traits = ['background', 'face', 'shirt', 'head', 'mouth', 'eyes', 'necklace'];
		const sortedTraits = traits.map((trait) =>
			$boy.rank_explain.filter((item) => item.attribute == trait).at(0)
		);

		const createImage = async () => {
			const src = await mergeImages(
				[
					`/traits/${sortedTraits[0].attribute}/${sortedTraits[0].value}.png`,
					`/traits/${sortedTraits[1].attribute}/${sortedTraits[1].value}.png`,
					`/traits/${sortedTraits[2].attribute}/${sortedTraits[2].value}.png`,
					`/traits/${sortedTraits[3].attribute}/${sortedTraits[3].value}.png`,
					`/traits/${sortedTraits[4].attribute}/${sortedTraits[4].value}.png`,
					`/traits/${sortedTraits[5].attribute}/${sortedTraits[5].value}.png`,
					`/traits/${sortedTraits[6].attribute}/${sortedTraits[6].value}.png`
				],
				{
					crossOrigin: 'anonymous'
				}
			);
			generatedImage = await src;
			isLoading = false;
		};
		createImage();
	});
</script>

{#if isLoading}
	<Loading />
{:else}
<div class="absolute top-0 left-0 bg-main-dark-blue h-full w-full -z-40"></div>
<img src={$boy.image} class="absolute top-0 left-0 opacity-20 object-cover h-full w-full -z-30" loading="eager" alt="season 1 boy" />
	<section class="container w-[100dvw] h-[100dvh] flex flex-col items-center justify-center">
		<h1 class="text-2xl font-bold mb-8 lg:mb-16">moneyboy {$boy.name.split(' ').at(3)}</h1>
		<div class="flex flex-col lg:flex-row items-center justify-center px-4">
			<a href={generatedImage} download={$boy.name}>
				<img src={generatedImage} alt={$boy.name} class="lg:max-w-md" />
				<p class="text-center opacity-80 mt-4">(click/tap on image to download)</p>
			</a>
		</div>
		<a href="/" class="my-20 lg:absolute lg:top-10 lg:left-10 flex items-center justify-center w-12 h-12 p-2 bg-white rounded-full">
        <img src={Back} alt="back" class="mr-1">
		</a>
	</section>
{/if}
