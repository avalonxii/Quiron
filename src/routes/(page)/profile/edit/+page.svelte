<script lang="ts">
	import {
		Button,
		ContainerCentred,
		Input,
		InputPhoto,
		Minititle,
		Smalltext,
		TextArea,
		Title
	} from 'quironlibrary';
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<ContainerCentred>
	<form action="?/uploadUser" method="POST">
		<div class="edit__container">
			<div class="edit__title">
				<Title>Edit Your Profile</Title>
			</div>
			<div class="oculto">
				<input type="text" name="_id" value={$page.data.userAuth?._id} />
			</div>
			<div class="edit__inputs--first">
				<InputPhoto name="image" />
				<div class="names">
					<Input
						label="What's ur name?"
						type="text"
						value={form?.name.name || $page.data.userAuth?.name}
						name="name"
						required
						error={form?.name.error != '' && form?.name.error ? true : false}
						>{form?.name.error}</Input
					>

					<Input
						label="What's ur userName?"
						type="text"
						value={form?.userName.userName || $page.data.userAuth?.userName}
						name="userName"
						required
						error={form?.userName.error != '' && form?.userName.error ? true : false}
						>{form?.userName.error}</Input
					>
				</div>
			</div>
			<div class="edit__inputs--second">
				<Input
					label="What's ur email?"
					type="email"
					value={form?.email.email || $page.data.userAuth?.email}
					name="email"
					required
					error={form?.email.error != '' && form?.email.error ? true : false}
					>{form?.email.error}</Input
				>
			</div>
			<div class="edit__inputs--third">
				<Smalltext>
					For greater security you will always have to update your password again (you can retype
					the previous one if you want)
				</Smalltext>
				<div>
					<Input
						label="What's ur new password?"
						type="password"
						value={form?.passw.passw || ''}
						name="password"
						required
						error={form?.passw.error != '' && form?.passw.error ? true : false}
						>{form?.passw.error}</Input
					>
					<Input
						label="Repeat ur new password"
						type="password"
						value={form?.passw2.passw2 || ''}
						name="password2"
						required
						error={form?.passw.error != '' && form?.passw.error ? true : false}
						>{form?.passw.error}</Input
					>
				</div>
			</div>
			<div class="edit__aboutme">
				<Minititle underlined>About Me:</Minititle>
				<TextArea name="aboutme" value={form?.aboutme.aboutme || $page.data.userAuth?.aboutme} />
			</div>
			<Button type="submit" label="Editar !!" />
		</div>
	</form>
</ContainerCentred>

<style lang="scss">
	@use '../../../../scss/colors';

	.oculto {
		display: none;
	}

	.edit {
		&__container {
			position: relative;
			border: 0.1875rem solid map-get($map: colors.$colors, $key: 'gray');
			border-radius: 1rem;
			padding: 5rem 5rem 2rem;
			margin-top: 5rem;
		}

		&__title {
			position: absolute;
			top: -29px;
			background-color: map-get($map: colors.$colors, $key: 'bc-white');
			padding: 0 0.5rem;
		}

		&__inputs {
			&--first {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 3rem;

				.names {
					width: 100%;
				}
			}

			&--second {
				margin-top: 1.5rem;
				padding-top: 1.5rem;
				border-top: 0.1875rem solid rgba(map-get($map: colors.$colors, $key: 'primary'), 0.6);
			}

			&--third {
				display: flex;
				flex-direction: column;
				gap: 1rem;

				div {
					display: flex;
					gap: 2.3rem;
				}
			}
		}

		&__aboutme {
			margin-bottom: 2rem;
		}
	}
</style>
