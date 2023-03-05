<script>
    import ProductImg1 from "../assets/massage-1.jpg";
    import ProductImg2 from "../assets/massage-2.jpg";
    import ProductImg3 from "../assets/massage-3.jpg";
    import ProductImg4 from "../assets/massage-4.jpg";
    import ProductImg5 from "../assets/training.jpg";
    
    import servicesStore from "../stores/services-store"
    import {onDestroy} from 'svelte';
    
    export let servicesAreaTexts = {};
    let unsubscribeServices;
    let massageServices;
    let trainingServices;
    
    unsubscribeServices = servicesStore.subscribe(data => {
        console.log("loaded data", data);
        massageServices = data.massage;
        trainingServices = data.training;
    });
    
    onDestroy(unsubscribeServices);
</script>

<!-- TODO FIX rounded corners om img! -->

<div class="w-full flex justify-center mb-3">
    <div class="text-gray-900 md:mt-0 m-0 sm:w-4/12/12 md:w-6/12 lg:w-6/12 leading-normal">
        <h1 class="pb-8 uppercase font-bold tracking-wide text-center">{servicesAreaTexts.intro}</h1>
        
        <div class="my-0 font-sans">
            <div class="w-1/2 h-1/2 flex justify-between">
                <img src="{ProductImg1}" alt="arm-tag" class="h-1/2 mr-px rounded-md">
                <img src="{ProductImg2}" alt="arm-tag" class="h-1/2 ml-px rounded-md">
            </div>
            <div class="massage-classic mt-4">
                <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{massageServices.classic.name}</h1>
                <p class="leading-normal mb-4 mx-2 text-gray-700">
                    {massageServices.classic.description}
                </p>
            </div>
            <div class="massage-trigger mt-4">
                <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{massageServices.trigger.name}</h1>
                <p class="leading-normal mb-4 mx-2 text-gray-700">
                    {massageServices.trigger.description}
                </p>
            </div>
            <div class="w-1/2 h-1/2 flex justify-between">
                <img src="{ProductImg3}" alt="arm-tag" class="h-1/2 mr-px rounded-md">
                <img src="{ProductImg4}" alt="arm-tag" class="h-1/2 ml-px rounded-md">
            </div>
        </div>
        
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

        <div class="w-1/2 mx-auto" >
            <img src="{ProductImg5}" alt="arm-tag" class="rounded-3xl">
        </div>

        <p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
            {servicesAreaTexts.outro}
        </p>
    </div>
</div>
