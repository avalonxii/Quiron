<script lang="ts">
	import {
		Avatar,
		Button,
		Card,
		ContainerCentred,
		MetaIcon,
		MiniUserCard,
		Title
	} from 'quironlibrary';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const datos = data.solutionWUser;
</script>

<div class="bc">
	<ContainerCentred>
		<div class="solution-container">
			<Title>Solutions</Title>
			<div class="filtros">
				<Button label={'filtro'} />
			</div>
		</div>
		<div class="solution__cards">
			{#each datos as { solution, user }}
				<Card on:click={() => goto(`/`)} solution>
					<img
						slot="card__image"
						src={`../../src/uploads/solutions/${solution.imgsPath[0]}`}
						alt={`${solution.title} imagen`}
					/>
					<span slot="card__submitted-date">submitetd 5 minutes ago</span>
					<span slot="card__title">{solution.title}</span>
					<div class="card__submitted-hashtags" slot="card__submitted-hashtags">
						{#each solution.hashtags as hashtag}
							<span>{hashtag}</span>
						{/each}
					</div>
					<div class="card__tags" slot="card__tags">
						{#each solution.tags as tag}
							<span class={`card__tags--${tag}`}>{tag}</span>
						{/each}
					</div>
					<div class="card__options" slot="card__options">
						<MetaIcon>
							<Icon icon="ci:chat" />
							<span slot="meta-info">10</span>
						</MetaIcon>
						<MetaIcon>
							<Icon icon="icon-park-outline:like" />
							<span slot="meta-info">{solution.likes.length}</span>
						</MetaIcon>
						<MetaIcon>
							<Icon icon="fluent:save-copy-20-regular" />
							<span slot="meta-info">10</span>
						</MetaIcon>
					</div>

					<div slot="card__user">
						<MiniUserCard on:click={() => goto(`/profile/${solution.IdUser}`)}>
							<div slot="card__image">
								<Avatar small />
							</div>
							<span slot="card__main-data">{user?.name}</span>
							<span slot="card__extra-data">{user?.points}</span>
							<span slot="card__sub-data">@{user?.userName}</span>
						</MiniUserCard>
					</div>

					{solution.description}
				</Card>
			{/each}
		</div>
	</ContainerCentred>
</div>

<style lang="scss">
	.solution {
		&__cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			column-gap: 0.3125rem;

			img {
				width: 100%;
				height: 100%;

				&:hover {
					transform: scale(1.1);
					transition: 0.35s;
				}
			}
		}
	}

	.ocultar {
		display: none;
	}

	.solution-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
		margin-bottom: 1.5rem;
	}

	.card__submitted-hashtags {
		display: flex;
		gap: 0.8rem;
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

	.card__options {
		display: flex;
		gap: 1rem;
	}
</style>
