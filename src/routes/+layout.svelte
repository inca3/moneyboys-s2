<script>
	import './styles.css';
	import { onMount } from 'svelte';
	import { moneyboys } from '../stores'
	import BullBG from '../lib/assets/bullbg.jpg'

	onMount(()=> {
		const getBoys = async () => {
			const res = await fetch('/api/boys')
			const data = await res.json()
			moneyboys.set(data.mints)
		}
		getBoys()
	})
</script>

<img src={BullBG} alt="bg" class="absolute top-0 left-0 h-full w-full object-cover opacity-20 -z-50">
<slot />

