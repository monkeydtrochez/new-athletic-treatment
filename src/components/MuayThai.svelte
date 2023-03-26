<script>
    import ProductImg5 from "../assets/training.jpg";
    
    export let trainingServices = {};
</script>

{#each trainingServices as training}
{#if training.type === "muaythai"}
<div class="mt-4">
    <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{training.title}</h1>
    <p class="leading-normal mb-4 mx-2 text-gray-700">
        {training.standard}
        <br/>
        {training.duo}
        <br/>
        {training.group}
    </p>
</div>
{:else}
<div class="mt-4">
    <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{training.title}</h1>
    <p class="leading-normal mb-4 mx-2 text-gray-700">
        {training.description}
    </p>
</div>
{/if}
{/each}

<div class="w-1/2 mx-auto rounded-lg overflow-hidden" >
    <img src="{ProductImg5}" alt="arm-tag">
</div>