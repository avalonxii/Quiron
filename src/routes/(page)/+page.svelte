<script>
	import About from '$lib/fragments/About.svelte';
	import { Bigtitle, Minititle, Paragraph } from 'quironlibrary';
</script>

<div class="home__container">
	<div class="bc-shape">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1200 120"
			preserveAspectRatio="none"
		>
			<path
				d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
				class="shape-fill"
			/>
		</svg>
	</div>

	<div class="home__content">
		<div>
			<Bigtitle>Quiron</Bigtitle>
			<div class="subtitle">
				<Minititle>¡Bienvenido a Quirón: El Repositorio de Retos de Programación!</Minititle>
			</div>
			<Paragraph style="width: 450px;">
				Sumérgete en el fascinante laberinto de la programación y descubre los desafíos más
				cautivadores que te llevarán a superar tus límites. Al igual que el mítico Quirón de la
				mitología griega, este repositorio es el guardián de conocimientos y desafíos que te guiarán
				en tu camino hacia la maestría en programación.
			</Paragraph>
		</div>
	</div>
</div>

<About />

<style lang="scss">
	@use '../../scss/colors';
	@use '../../scss/mixin';

	.home {
		&__container {
			position: relative;
			background-image: linear-gradient(to right top, #13cfd9, #00dbc6, #00e5a0, #60eb6a, #a8eb12);
			min-height: 100vh;
			z-index: 1;
			display: flex;

			.bc-shape {
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				overflow: hidden;
				line-height: 0;

				svg {
					position: relative;
					display: block;
					width: calc(100% + 1.3px);
					height: 9.375rem;
				}

				.shape-fill {
					fill: map-get($map: colors.$colors, $key: 'bc-white');
				}
			}
		}

		&__content {
			position: absolute;
			z-index: 1;
			gap: 1.4rem;
			width: 45%;
			height: 100%;
			@include mixin.containerPadding();

			display: flex;
			align-items: center;

			.subtitle {
				max-width: 37.5rem;
			}
		}
	}
</style>
