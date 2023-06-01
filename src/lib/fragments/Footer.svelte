<script>
	import Contact from '$lib/fragments/Contact.svelte';
	import Icon from '@iconify/svelte';
	import { Link } from 'quironlibrary';
</script>

<div class="footer">
	<div class="footer__content">
		<div class="footer__logo">Quiron</div>
		<div class="footer__social">
			<a href="/#"><Icon class="icon" icon="ph:instagram-logo-fill" /></a>
			<a href="/#"><Icon class="icon" icon="ph:twitter-logo-fill" /></a>
			<a href="/#"><Icon class="icon" icon="mdi:facebook" /></a>
		</div>
		<div class="footer__contact">
			<p class="mini-title">
				¿Tienes alguna sugerencia para mejorar la Web o se te ha ocurrido algun reto?, ponte en
				contacto con nosotros <Icon icon="tabler:mood-wink-2" /> !!!
			</p>
			<Contact />
		</div>
	</div>
	<div class="footer__creator">
		<p class="copy">
			&copy; Quiron 2023 - Created by <Link href={''} label="Avalon XII" />
			<Icon class="icon" icon="mdi:dinosaur-pixel" />
		</p>

		<div>
			<a href="/#"><Icon class="icon" icon="fluent-mdl2:git-hub-logo" /></a>
			<a href="/#"><Icon class="icon" icon="ph:instagram-logo-fill" /></a>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../scss/mixin';
	@use '../../scss/colors';

	.footer {
		background-color: map-get($map: colors.$colors, $key: 'bc-white');
		width: 100%;
		margin-top: 2.5rem;

		&__content {
			@include mixin.containerPadding;
			box-shadow: rgba(100, 100, 111, 0.2) 0rem 0.4375rem 1.8125rem 0rem;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			min-height: 300px;
		}

		&__logo {
			display: flex;
			align-items: center;
		}

		&__contact {
			width: 100%;
			padding: 0.8rem 0;
		}

		&__creator {
			@include mixin.containerPadding;
			border-top: 0.125rem solid map-get($map: colors.$colors, $key: 'primary');

			background-color: map-get($map: colors.$colors, $key: 'gray');
			display: flex;
			justify-content: space-between;

			.copy {
				display: flex;
				align-items: center;
				gap: 1rem;
			}
		}
	}
</style>
