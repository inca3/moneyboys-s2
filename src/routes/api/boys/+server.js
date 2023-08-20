import { json } from '@sveltejs/kit';

export async function GET() {
	{
		try {
			const res = await fetch('https://moonrank.app/mints/solana_money_boys');
			const data = await res.json();
			return json(data);
		} catch (error) {
			return {
				body: error
			};
		}
	}
}
