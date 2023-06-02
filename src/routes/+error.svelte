<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from 'quironlibrary';
</script>

<div class="error__container">
	<div class="notfound-bg">
		<div />
		<div />
		<div />
		<div />
	</div>
	<h2 class="number">{$page.status}</h2>
	<div class="error__fun">
		<div class="ghost-copy">
			<div class="one" />
			<div class="two" />
			<div class="three" />
			<div class="four" />
		</div>
		<div class="ghost">
			<div class="face">
				<div class="eye" />
				<div class="eye-right" />
				<div class="mouth" />
			</div>
		</div>
		<div class="shadow" />
	</div>
	<p class="text">{$page.error?.message}</p>
	<div class="button"><Button secondary label="Return To Home" on:click={() => goto('/')} /></div>
</div>

<style lang="scss">
	@use '../scss/colors';

	@function multiple-shadow($length) {
		$value: 2px -1px 0 map-get(
				$map: colors.$colors,
				$key: 'secondary'
			);

		@for $i from 2 through $length {
			$ho: $i * 2;
			$vo: -#{$ho / 2};
			$col: hsl(0deg, 0%, $i * 2%);
			$value: $value, #{$ho}px #{$vo}px 0 $col;
		}

		@return $value;
	}

	.error__container {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.number {
			font-size: 20vmin;
			letter-spacing: 5vmin;
			text-shadow: multiple-shadow(8);
		}

		.text {
			position: relative;
			font-size: 8vmin;
			text-shadow: multiple-shadow(1);

			&::after {
				content: '';
				position: absolute;
				top: 50%;
				width: 100%;
				height: 14px;
				transform: skew(-12deg) translateX(-10%);
				transform: rotate(5deg);
				background: rgba(87, 238, 235, 0.5);
				z-index: -1;
			}
		}

		.button {
			margin-top: 2.5rem;
		}
	}

	.error__fun {
		position: absolute;
		width: 200px;
		height: 200px;
	}

	.ghost {
		width: 50%;
		height: 53%;
		left: 25%;
		top: 10%;
		position: absolute;
		border-radius: 50% 50% 0 0;
		background: white;
		border: 1px solid gray;
		border-bottom: none;
		animation: float 2s ease-out infinite;
	}

	.ghost-copy {
		width: 50%;
		height: 53%;
		left: 25%;
		top: 10%;
		position: absolute;
		border-radius: 50% 50% 0 0;
		background: white;
		border: 1px solid gray;
		border-bottom: none;
		animation: float 2s ease-out infinite;
		z-index: 0;
	}

	.face {
		position: absolute;
		width: 100%;
		height: 60%;
		top: 20%;
	}
	.eye,
	.eye-right {
		position: absolute;
		background: black;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		top: 40%;
	}

	.eye {
		left: 25%;
	}
	.eye-right {
		right: 25%;
	}

	.mouth {
		position: absolute;
		top: 50%;
		left: 45%;
		width: 10px;
		height: 10px;
		border: 3px solid;
		border-radius: 50%;
		border-color: transparent black black transparent;
		transform: rotate(45deg);
	}

	.one,
	.two,
	.three,
	.four {
		position: absolute;
		background: white;
		top: 85%;
		width: 25%;
		height: 23%;
		border: 1px solid gray;
		z-index: 0;
	}

	.one {
		border-radius: 0 0 100% 30%;
		left: -1px;
	}

	.two {
		left: 23%;
		border-radius: 0 0 50% 50%;
	}

	.three {
		left: 50%;
		border-radius: 0 0 50% 50%;
	}

	.four {
		left: 74.5%;
		border-radius: 0 0 30% 100%;
	}

	.shadow {
		position: absolute;
		width: 30%;
		height: 7%;
		background: gray;
		left: 35%;
		top: 80%;
		border-radius: 50%;
		animation: scale 2s infinite;
	}

	@keyframes scale {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}

	@keyframes float {
		50% {
			transform: translateY(15px);
		}
	}

	.notfound-bg {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: hidden;
		z-index: -2;
	}

	.notfound-bg > div {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		background-color: #eee;
	}

	.notfound-bg > div:nth-child(1) {
		left: 20%;
	}

	.notfound-bg > div:nth-child(2) {
		left: 40%;
	}

	.notfound-bg > div:nth-child(3) {
		left: 60%;
	}

	.notfound-bg > div:nth-child(4) {
		left: 80%;
	}

	.notfound-bg > div:after {
		content: '';
		position: absolute;
		top: 0px;
		left: -0.5px;
		-webkit-transform: translateY(-160px);
		-ms-transform: translateY(-160px);
		transform: translateY(-160px);
		height: 160px;
		width: 2px;
		background-color: map-get($map: colors.$colors, $key: 'secondary');
	}

	@-webkit-keyframes drop {
		90% {
			height: 20px;
		}
		100% {
			height: 160px;
			-webkit-transform: translateY(calc(100vh + 160px));
			transform: translateY(calc(100vh + 160px));
		}
	}

	@keyframes drop {
		90% {
			height: 20px;
		}
		100% {
			height: 160px;
			-webkit-transform: translateY(calc(100vh + 160px));
			transform: translateY(calc(100vh + 160px));
		}
	}

	.notfound-bg > div:nth-child(1):after {
		-webkit-animation: drop 3s infinite linear;
		animation: drop 3s infinite linear;
		-webkit-animation-delay: 0.2s;
		animation-delay: 0.2s;
	}

	.notfound-bg > div:nth-child(2):after {
		-webkit-animation: drop 2s infinite linear;
		animation: drop 2s infinite linear;
		-webkit-animation-delay: 0.7s;
		animation-delay: 0.7s;
	}

	.notfound-bg > div:nth-child(3):after {
		-webkit-animation: drop 3s infinite linear;
		animation: drop 3s infinite linear;
		-webkit-animation-delay: 0.9s;
		animation-delay: 0.9s;
	}

	.notfound-bg > div:nth-child(4):after {
		-webkit-animation: drop 2s infinite linear;
		animation: drop 2s infinite linear;
		-webkit-animation-delay: 1.2s;
		animation-delay: 1.2s;
	}
</style>
