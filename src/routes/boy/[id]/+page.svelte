<script>
	import { onMount } from 'svelte';
	import { boy } from '../../../stores';
	import { gmSelected, gmSollessSelected } from '../../../stores';
	import Loading from '../../../lib/Loading.svelte';
	import mergeImages from 'merge-images';
	import Back from '../../../lib/assets/back.png';
	import {goto} from '$app/navigation'

	let generatedImage;
	let isLoading = true;

	const handleBack = () => {
		goto(`/`)
		gmSelected.set(false)
		gmSollessSelected.set(false)
	}

	const colors = ['light', 'purple', 'pink', 'lavender', 'yellow', 'teal', 'orange', 'blue', 'green', 'white']
	
	onMount(() => {
		let traits;
		if ($boy.rank_explain.filter(obj => obj.value.includes('darkmask')).length > 0 || $boy.rank_explain.filter(obj => obj.value.includes('zigmouth')).length > 0) {
			traits = ['background', 'face', 'shirt', 'eyes', 'mouth', 'head', 'necklace'];
		} else {traits = ['background', 'face', 'shirt', 'eyes', 'head', 'mouth', 'necklace'];}
		let sortedTraits = traits.map((trait) =>
			$boy.rank_explain.filter((item) => item.attribute == trait).at(0)
		);

		
		const bg = colors.indexOf(sortedTraits.at(0).value)
		const face = colors.indexOf(sortedTraits.at(1).value)

		colors.splice(bg,1)
		colors.splice(face-1,1)
		const randomColor = colors[Math.floor(Math.random() * colors.length)]

		const createImage = async () => {
			let gm = []
			if ($gmSelected) {
				gm = [`/traits/gm/cup/${randomColor}.png`, `/traits/gm/font/${sortedTraits.at(1).value}.png`, `/traits/gm/hand/${sortedTraits.at(1).value}.png`, `/traits/gm/outline.png`]
			}
			else if ($gmSollessSelected) {
				gm = [`/traits/gmsollessman/cup/${randomColor}.png`, `/traits/gmsollessman/hand/${sortedTraits.at(1).value}.png`, `/traits/gmsollessman/outline.png`]
			}
			const src = await mergeImages(sortedTraits.map(trait => `/traits/${trait.attribute}/${trait.value}.png`).concat(gm),
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
			<a href={generatedImage} download={`moneyboy ${$boy.name.split(' ').at(3)}`}>
				<img src={generatedImage} alt={$boy.name} class="lg:max-w-md" />
				<p class="text-center opacity-80 mt-4">(click/tap on image to download)</p>
			</a>
		</div>
		<button on:click={handleBack} class="my-20 lg:absolute lg:top-10 lg:left-10 flex items-center justify-center w-12 h-12 p-2 bg-white rounded-full">
        <img src={Back} alt="back" class="mr-1" >
		</button>
	</section>
{/if}
