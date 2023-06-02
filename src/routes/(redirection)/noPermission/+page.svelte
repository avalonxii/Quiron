<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from 'quironlibrary';
</script>

<div class="container">
	<div class="bc">
		<div class="cube" />
		<div class="cube" />
		<div class="cube" />
		<div class="cube" />
		<div class="cube" />
		<div class="cube" />
	</div>
	<h2 class="title">No Permision</h2>
	<div class="buttons">
		<Button label="Go To Log in" secondary on:click={() => goto('/login')} />

		<Button label="Return To Home" secondary on:click={() => goto('/login')} />
	</div>
</div>

<style lang="scss">
	@use '../../../scss/colors';

	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;

		.title {
			font-weight: 900;
			//   text-shadow: 1px 1px 0px #fff;
			font-size: 8vw;
			text-align: center;
			margin: 0;
			color: #222;
			background: url(https://i.imgur.com/jGIGWOA.jpg) repeat fixed;
			-webkit-background-clip: text;
			background-clip: text;

			-webkit-text-fill-color: transparent;
			-webkit-text-fill-color: transparent;
			animation: bp 8s infinite linear;
		}

		.buttons {
			display: flex;
			gap: 3rem;
		}
	}

	@keyframes bp {
		100% {
			background-position: 0% 552px;
		}
		0% {
			background-position: 0% 0px;
		}
	}

	.bc {
		top: 0;
		left: 0;
		position: absolute;
		z-index: -1;

		.cube {
			position: absolute;
			top: 80vh;
			left: 45vw;
			width: 10px;
			height: 10px;
			border: solid 1px map-get($map: colors.$colors, $key: 'warning');
			transform-origin: top left;
			transform: scale(0) rotate(0deg) translate(-50%, -50%);
			animation: cube 8s ease-in forwards infinite;

			&:nth-child(2n) {
				border-color: map-get($map: colors.$colors, $key: 'primary');
			}

			&:nth-child(2) {
				animation-delay: 2s;
				left: 25vw;
				top: 40vh;
			}

			&:nth-child(3) {
				animation-delay: 4s;
				left: 75vw;
				top: 50vh;
			}

			&:nth-child(4) {
				animation-delay: 6s;
				left: 90vw;
				top: 10vh;
			}

			&:nth-child(5) {
				animation-delay: 8s;
				left: 10vw;
				top: 85vh;
			}

			&:nth-child(6) {
				animation-delay: 10s;
				left: 50vw;
				top: 10vh;
			}
		}

		@keyframes cube {
			from {
				transform: scale(0) rotate(0deg) translate(-50%, -50%);
				opacity: 1;
			}

			to {
				transform: scale(20) rotate(960deg) translate(-50%, -50%);
				opacity: 0;
			}
		}
	}
</style>
