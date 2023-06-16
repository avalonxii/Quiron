<script>
	import { goto } from '$app/navigation';
	import { Avatar, Paragraph, Title } from 'quironlibrary';
</script>

<div class="aboutus__bc container">
	<div class="aboutus__container">
		<div class="title"><Title>About Me</Title></div>
		<div class="aboutus__info">
			<h3 class="medium">HOLA, MI NOMBRE ES AVADEV</h3>
			<div class="aboutus__info-info">
				<Avatar src="/avalonDEV.png" on:click={() => goto('/profile/avalon')} />
				<Paragraph>
					Soy un estudiante de ciclo formativo de grado superior y esta página web es mi TFG, que
					nace ante la curiosidad de ver hasta donde llego con el desarrollo y estar presente en las
					distintas etapas de este. El nombre de esta web es QUIRON que según la mitológia griega
					fue un centauro inteligente, sabio y de buen carácter que fue tutor de héroes como Aquiles
					o Áyax.
				</Paragraph>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../scss/mixin';
	@use '../../scss/colors';

	.aboutus {
		&__bc {
			margin-bottom: 3rem;
			@include mixin.containerPadding();
		}

		&__container {
			position: relative;
			border: 1px solid map-get($map: colors.$colors, $key: 'gray');
			border-radius: 5px;
			margin-top: 3.875rem;
			@include mixin.containerPadding($paddingH: 1.4rem);

			.medium {
				margin-bottom: 1.4rem;
			}

			.title {
				background-color: white;
				position: absolute;
				right: 20px;
				top: -25px;
			}
		}

		&__info-info {
			display: flex;
			align-items: center;
			gap: 2rem;
			margin-bottom: 3rem;
		}
	}
</style>
