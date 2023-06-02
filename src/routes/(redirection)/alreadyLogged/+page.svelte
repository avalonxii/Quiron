<script lang="ts">
	import { page } from '$app/stores';
	import { Button, Title } from 'quironlibrary';
	import { goto } from '$app/navigation';
</script>

<div class="container">
	<ul class="circles">
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
		<li />
	</ul>
	<div class="title"><Title>You are already logged whit the following User :</Title></div>
	<div class="name">
		<span>{$page.data.userAuth?.name}</span>

		<Button label="Go Home" secondary on:click={() => goto('/')} />
	</div>
</div>

<style lang="scss">
	@use '../../../scss/colors';

	.container {
		position: relative;
		width: 100%;
		height: 100vh;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.3rem;

		.title {
			backdrop-filter: blur(4px);
		}

		.name {
			display: flex;
			align-items: center;
			gap: 2rem;

			span {
				background-color: rgba(163, 163, 163, 0.286);
				backdrop-filter: blur(4px);
				padding: 0.4rem 1rem;
				border-radius: 0.3rem;
				color: map-get($map: colors.$colors, $key: 'primary');
				font-size: 2rem;
			}
		}

		.circles {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: 0;

			li {
				position: absolute;
				display: block;
				list-style: none;
				width: 20px;
				height: 20px;
				background: map-get($map: colors.$colors, $key: 'secondary');
				animation: animate 25s linear infinite;
				bottom: -150px;

				&:nth-child(1) {
					left: 25%;
					width: 80px;
					height: 80px;
					animation-delay: 20s;
				}

				&:nth-child(2) {
					left: 10%;
					width: 20px;
					height: 20px;
					animation-delay: 2s;
					animation-duration: 12s;
				}

				&:nth-child(3) {
					left: 70%;
					width: 20px;
					height: 20px;
					animation-delay: 4s;
				}

				&:nth-child(4) {
					left: 40%;
					width: 60px;
					height: 60px;
					animation-delay: 0s;
					animation-duration: 18s;
				}

				&:nth-child(5) {
					left: 65%;
					width: 20px;
					height: 20px;
					animation-delay: 0s;
				}

				&:nth-child(6) {
					left: 75%;
					width: 110px;
					height: 110px;
					animation-delay: 3s;
				}

				&:nth-child(7) {
					left: 35%;
					width: 150px;
					height: 150px;
					animation-delay: 7s;
				}

				&:nth-child(8) {
					left: 50%;
					width: 25px;
					height: 25px;
					animation-delay: 15s;
					animation-duration: 45s;
				}

				&:nth-child(9) {
					left: 20%;
					width: 15px;
					height: 15px;
					animation-delay: 2s;
					animation-duration: 35s;
				}

				&:nth-child(10) {
					left: 85%;
					width: 150px;
					height: 150px;
					animation-delay: 0s;
					animation-duration: 11s;
				}
			}
		}

		@keyframes animate {
			0% {
				transform: translateY(0) rotate(0deg);
				opacity: 1;
				border-radius: 0;
			}

			100% {
				transform: translateY(-1000px) rotate(720deg);
				background-color: map-get($map: colors.$colors, $key: 'error');
				opacity: 0;
				border-radius: 50%;
			}
		}
	}
</style>
