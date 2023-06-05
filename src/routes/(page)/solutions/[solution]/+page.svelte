<script lang="ts">
	import {
		Carousel,
		ContainerCentred,
		Difficulty,
		Link,
		Paragraph,
		Smalltext,
		Subtitle
	} from 'quironlibrary';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageData;
</script>

<ContainerCentred>
	<div class="single__container">
		<div class="single__title">
			<Subtitle>{data.solution.title}</Subtitle>
		</div>

		<div class="single__photos">
			<Carousel autoplay={7000}>
				{#each data.solution.imgsPath as src}
					<div>
						<img src={`../../../src/uploads/solutions/${src}`} alt="" />
					</div>
				{/each}
				<span class="centro" slot="prev-control"><Icon icon="bxs:left-arrow" /></span>
				<span class="centro" slot="next-control"><Icon icon="bxs:right-arrow" /></span>
			</Carousel>
		</div>

		<div class="single__info">
			<div class="single__other">
				<div class="tags">
					{#each data.solution.tags as tag}
						<span>{tag}</span>
					{/each}
				</div>
				<Difficulty difficulty={2} />
			</div>

			<div class="single__hastags">
				{#each data.solution.hashtags as hashtags}
					<span>{hashtags}</span>
				{/each}
			</div>
			<div class="single__description">
				<Paragraph>
					{data.solution.description}
				</Paragraph>
			</div>
			<Smalltext
				>puedes encontrar el codigo en <Link href="" label="gitHub" /> creado por <Link
					href=""
					label="creador"
				/></Smalltext
			>
		</div>
	</div>
</ContainerCentred>

<style lang="scss">
	@use '../../../../scss/colors';

	.single {
		&__container {
			padding-top: 3rem;
		}
		&__title,
		&__photos {
			margin-bottom: 2rem;
		}

		&__photos {
			div {
				width: 100%;
				height: 100%;
				object-fit: contain;
				display: flex;
				justify-content: center;
				align-items: center;

				img {
					width: 100%;
					height: 50rem;
				}
			}
		}

		&__other {
			display: flex;
			justify-content: space-between;
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
