<script>
    import ProductImg5 from "../assets/training.jpg";
    
    export let introText;
    export let outroText;
    export let trainingServices = {};
</script>

<div class="w-full flex justify-center mb-3">
    <div class="text-gray-900 md:mt-0 m-0 sm:w-4/12/12 md:w-6/12 lg:w-6/12 leading-normal">
        <h1 class="pb-8 uppercase font-bold tracking-wide text-center">{introText}</h1>

        
        {#each trainingServices as training}
        {#if training.type === "muaythai"}
        <div class="mt-4">
            
            <h3 class="text-gray-700 font-bold text-left">Privat</h3>
            <p class="leading-normal mb-4 text-gray-700">
                {training.standard}
            </p>

            <h3 class="text-gray-700 font-bold text-left">Duo</h3>
            <p class="leading-normal mb-4 text-gray-700">
                {training.duo}
            </p>

            <h3 class="text-gray-700 font-bold text-left">Grupp</h3>
            <p class="leading-normal mb-4 text-gray-700">
                {training.group}
            </p>
        </div>
        {:else}
        <div class="mt-4">
            <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{training.title}</h1>
            <p class="leading-normal mb-4 text-gray-700">
                {training.description}
            </p>
        </div>
        {/if}
        {/each}
        
        <div class="w-1/2 mx-auto rounded-lg overflow-hidden" >
            <img src="{ProductImg5}" alt="arm-tag">
        </div>
        
        <p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
            {outroText}
        </p>
    </div>
</div>