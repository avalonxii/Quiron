<script lang="ts">
	import {
		Button,
		Carousel,
		ContainerCentred,
		Difficulty,
		Paragraph,
		Smalltext,
		Subtitle
	} from 'quironlibrary';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;

	let src = 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/07/25/62de6567185fa.jpeg';
</script>

<ContainerCentred>
	<div class="single__container">
		<div class="single__title">
			<Subtitle>{data.challenge.title}</Subtitle>
		</div>

		<div class="single__photos">
			<Carousel autoplay={7000}>
				{#each data.challenge.imgsPath as src}
					<div>
						<img src={`../../../src/uploads/challenges/${src}`} alt="" />
					</div>
				{/each}
				<span class="centro" slot="prev-control"><Icon icon="bxs:left-arrow" /></span>
				<span class="centro" slot="next-control"><Icon icon="bxs:right-arrow" /></span>
			</Carousel>
		</div>

		<div class="single__info">
			<div class="single__other">
				<div class="tags">
					{#each data.challenge.tags as tag}
						<span class={`tags--${tag}`}>{tag}</span>
					{/each}
				</div>
				<Difficulty difficulty={data.challenge.diffuculty} />
			</div>
			<div class="single__description">
				<Paragraph>
					{data.challenge.description}
				</Paragraph>
			</div>

			<div class="sinlge__buttons">
				{#if !$page.data.userAuth}
					<Smalltext>To be able to perform the challenges you have to:</Smalltext>
					<Button
						label="Log in"
						on:click={() => {
							goto('/login');
						}}
					/>
				{:else}
					<Button
						label="Start Challange"
						on:click={() => {
							goto('/guardado');
						}}
					/>
				{/if}
			</div>
		</div>
	</div>
</ContainerCentred>

<style lang="scss">
	@use '../../../../scss/colors';
	@use '../../../../scss/mixin';

	.single {
		&__container {
			padding-top: 3rem;
		}
		&__title,
		&__photos {
			margin-bottom: 2rem;
		}

		&__title {
			@include mixin.text-ellipsis(1);
		}

		&__photos {
			div {
				width: 100%;
				height: 50rem;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 7rem;

				img {
					width: 100%;
					height: 50rem;
				}
			}
		}

		&__other {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.tags {
				display: flex;
				gap: 1rem;
				margin-bottom: 2rem;
				font-weight: bold;
				font-size: 1.3rem;

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
		}

		&__hastags {
			display: flex;
			gap: 1.4rem;
			color: map-get($map: colors.$colors, $key: 'primary');
			margin-bottom: 1rem;
		}

		&__description {
			margin-bottom: 1.4rem;
		}
	}
</style>
