<script>    
    import Massage from "./Massage.svelte";
    import MuayThai from "./MuayThai.svelte";
    
    import servicesStore from "../stores/services-store"
    import {onDestroy} from 'svelte';
    
    export let servicesAreaTexts = {};
    let unsubscribeServices;
    let massageServices;
    let trainingServices;
    
    unsubscribeServices = servicesStore.subscribe(data => {
        massageServices = data.massage;
        trainingServices = data.training;
    });
    
    onDestroy(unsubscribeServices);
</script>

<div class="w-full flex justify-center mb-3">
    <div class="text-gray-900 md:mt-0 m-0 sm:w-4/12/12 md:w-6/12 lg:w-6/12 leading-normal">
        <h1 class="pb-8 uppercase font-bold tracking-wide text-center">{servicesAreaTexts.intro}</h1>
        
        <Massage massageServices={massageServices}/>

        <MuayThai trainingServices={trainingServices}/>
        
        <p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
            {servicesAreaTexts.outro}
        </p>
    </div>
</div>
