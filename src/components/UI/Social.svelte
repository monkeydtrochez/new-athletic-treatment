<script>
	import {createEventDispatcher} from 'svelte';

	const dispatch = createEventDispatcher();

	function openContactForm(){
		dispatch('openModal');
	}

</script>

<div class="flex flex-col items-center w-full md:w-1/4 mt-6 md:mt-0">
	<h4 class="inline-block py-2 px-3 uppercase font-bold tracking-wide text-white-900">Följ oss!</h4>
	<div class="flex pl-0 md:pl-4 justify-start">
		<!-- svelte-ignore security-anchor-rel-noreferrer -->
		<a class="flex items-center mr-6 no-underline" target="_blank" href="https://www.facebook.com/athletictreatment">
			<i class="fab fa-facebook-f"></i></a>
			
			<!-- svelte-ignore security-anchor-rel-noreferrer -->
			<a class="flex items-center mr-6 no-underline" target="_blank" href="https://www.instagram.com/athletictreatment/">
				<i class="fab fa-instagram"></i></a>
				
				<!-- svelte-ignore security-anchor-rel-noreferrer -->
				<a class="flex items-center mr-6 no-underline" target="_blank" href="#" on:click|preventDefault={openContactForm}> <!-- on click TODO öppna kontakt formulär -->
					<svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
					</svg></a>
				</div>
			</div>