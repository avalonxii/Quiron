<script lang="ts">
	import { Button, Card, Carousel, ContainerCentred, Difficulty, Title } from 'quironlibrary';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	let counter: number = data.challenges.length;
	const { challenges } = data;
</script>

<div class="bc">
	<ContainerCentred>
		<div class="challange-container">
			<Title>Challenges</Title>
			<div class="filtros">
				<Button label={'filtro'} />
			</div>
		</div>
		<Carousel autoplay={7000}>
			{#each { length: Math.ceil(counter / 6) } as _, i}
				<div class="page">
					{#each Array.from(Array((i + 1) * 6).keys()).slice(6 * i) as j}
						{#if challenges[j]}
							<Card on:click={() => goto(`/challenge/${challenges[j]._id}`)}>
								<img
									slot="card__image"
									src={`../../src/uploads/challenges/${challenges[j].imgsPath[0]}`}
									alt={`${challenges[j].title} image`}
								/>
								<span class="card__submitted-date" slot="card__submitted-date"
									>submitetd 5 minutes ago</span
								>
								<span class="card__title" slot="card__title"> {challenges[j].title} </span>
								<div class="card__tags" slot="card__tags">
									{#each challenges[j].tags as tag}
										<span class={`card__tags--${tag}`}>{tag}</span>
									{/each}
								</div>
								<div class="card__options" slot="card__options">
									<Difficulty />
								</div>
								{challenges[j].description}
							</Card>
						{/if}
					{/each}
				</div>
			{/each}
			<span class="centro" slot="prev-control"><Icon icon="bxs:left-arrow" /></span>
			<span class="centro" slot="next-control"><Icon icon="bxs:right-arrow" /></span>
		</Carousel>
	</ContainerCentred>
</div>

<style lang="scss">
	@use '../../scss/mixin';

	.challange-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}

	.centro {
		display: flex;
		align-items: center;
	}
	.page {
		width: fit-content;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.card__title {
		@include mixin.text-ellipsis(2);
		font-size: 1.65rem !important;
	}

	.card__tags {
		display: flex;
		gap: 0.7rem;
		text-transform: uppercase;
		font-weight: bold;

		&--html {
			color: rgb(133, 195, 215);
		}

		&--css {
			color: rgb(238, 107, 107);
		}

		&--js {
			color: rgb(96, 226, 96);
		}

		&--api {
			color: rgb(31, 185, 177);
		}
	}

	img {
		width: 100%;
		height: 100%;

		&:hover {
			transform: scale(1.1);
			transition: 0.35s;
		}
	}
</style>
