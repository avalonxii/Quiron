<script lang="ts">
	import { Avatar, ContainerCentred, MiniUserCard, Paragraph, InputSearch } from 'quironlibrary';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;
	const { users } = data;

	$: showPopUp = false;
	$: userName = '';
	$: id = '';
</script>

<div class="bc">
	<ContainerCentred>
		<div class="users__search">
			<InputSearch on:change={() => console.log('hola')} />
		</div>

		<div class="users__container">
			{#each users as user}
				<div class="users__cell">
					<MiniUserCard border on:click={() => goto(`/users/${user.userName}`)}>
						<div slot="card__image">
							<Avatar src={`../src/uploads/users/${user.avatarPhotoPath}`} small />
						</div>
						<span slot="card__main-data">{user.name}</span>
						<span slot="card__extra-data">{user.points}</span>
						<span slot="card__sub-data">@{user.userName}</span>
					</MiniUserCard>

					<button
						type="button"
						class="delete"
						on:click={() => {
							showPopUp = true;
							userName = user.userName;
							id = user._id;
						}}>delete</button
					>
				</div>
			{/each}
		</div>
	</ContainerCentred>

	<div class={`popup ${showPopUp ? '' : 'close'}`}>
		<div class="info">
			<Paragraph>seguro que Quieres eliminar al usuario : {userName} ?</Paragraph>
			<form action="?/delete" method="POST">
				<div class="disabled">
					<input type="text" name="id" value={id} />
				</div>

				<div class="buttons">
					<button
						class="no"
						on:click={() => {
							showPopUp = false;
							userName = '';
							id = '';
						}}>No</button
					>
					<button class="delete" type="submit">Si, Eliminar</button>
				</div>
			</form>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../../scss/colors';

	.bc {
		position: relative;
		width: 100%;
		height: 100vh;
	}

	.disabled {
		display: none;
	}

	.close {
		visibility: hidden;
	}

	.popup {
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.364);
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;

		.info {
			position: absolute;
			background-color: map-get($map: colors.$colors, $key: 'white');
			border-radius: 0.7rem;
			min-width: 19.75rem;
			padding: 2rem;

			.buttons {
				display: flex;
				gap: 1rem;
				padding-top: 1rem;

				.no {
					border: 3px solid map-get($map: colors.$colors, $key: 'primary');
					border-radius: 0.7rem;
					padding: 1rem 2rem;
					color: map-get($map: colors.$colors, $key: 'primary');
					font-weight: bold;
					cursor: pointer;

					&:hover {
						color: map-get($map: colors.$colors, $key: 'white');
						background-color: map-get($map: colors.$colors, $key: 'primary');
					}
				}
			}
		}
	}

	.delete {
		width: 100%;
		border: 3px solid map-get($map: colors.$colors, $key: 'error');
		background-color: map-get($map: colors.$colors, $key: 'error');
		border-radius: 0.4rem;
		padding: 0.5rem;
		font-weight: bold;
		color: map-get($map: colors.$colors, $key: 'white');
		cursor: pointer;
		user-select: none;

		&:hover {
			background-color: transparent;
			color: map-get($map: colors.$colors, $key: 'error');
		}

		&:active {
			transform: scale(0.9);
			transition: 0.2s;
		}
	}

	.users {
		&__container {
			display: flex;
			flex-wrap: wrap;
			gap: 1.2rem;
		}
		&__search {
			margin-top: 2rem;
			margin-bottom: 3rem;
		}
	}
</style>
