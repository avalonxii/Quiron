<script lang="ts">
	import {
		Avatar,
		Button,
		Card,
		ContainerCentred,
		MetaIcon,
		MiniUserCard,
		Minititle,
		Paragraph,
		Smalltext,
		Subtitle,
		Title
	} from 'quironlibrary';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { me, solutions } = data;
</script>

<ContainerCentred>
	<Title>Profile</Title>
</ContainerCentred>

<div class="bc">
	<ContainerCentred>
		<div class="profile__user">
			<div class="profile__info">
				<div class="profile__photo">
					<Avatar src={`../../src/uploads/users/${me.avatarPhotoPath || 'fotounknown.jpg'}`} />
					<Button on:click={() => goto('/profile/edit')} label="editar" />
				</div>
				<div class="profile__data">
					<Subtitle>{me.name}</Subtitle>
					<Smalltext>{me.userName}</Smalltext>
					<div class="points">{me.points} points</div>
					<a href="/"><Icon class="icon" icon="fluent-mdl2:git-hub-logo" /></a>
				</div>
			</div>
			<Paragraph>{me.aboutme || "'hola que tal esta es una descripcion de ejemplo'"}</Paragraph>
		</div>
	</ContainerCentred>
</div>

<ContainerCentred>
	<div class="profile__solutions">
		<div class="title"><Minititle underlined>last solutions</Minititle></div>
		<div class="solution__cards">
			{#each solutions as solution}
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

					{solution.description}
				</Card>
			{/each}
		</div>
	</div>
</ContainerCentred>

<style lang="scss">
	@use '../../../scss/colors';

	.bc {
		background-color: map-get($map: colors.$colors, $key: 'white');
	}

	.profile {
		&__user {
			min-height: 200px;
			padding-top: 1.5rem;
			padding-bottom: 1.5rem;

			display: flex;
			justify-content: space-between;
			align-items: start;
			gap: 20%;
		}

		&__info {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			gap: 2.5rem;
		}

		&__data {
			display: grid;
			gap: 0.5rem;

			.points {
				font-size: 2rem;
				font-weight: bold;
				color: map-get($map: colors.$colors, $key: 'primary');
			}
		}

		&__solutions {
			margin-bottom: 2rem;
			margin-top: 4.5rem;
			.title {
				height: fit-content;
				display: flex;
				justify-content: center;
			}
		}
	}

	.solution {
		&__cards {
			display: flex;
			flex-wrap: wrap;
			justify-content: start;
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

	.card__options {
		display: flex;
		gap: 1rem;
	}
</style>
