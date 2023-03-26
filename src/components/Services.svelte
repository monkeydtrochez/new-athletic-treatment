<script>
    import Massage from "./Massage.svelte";
    import MuayThai from "./MuayThai.svelte";
    
    export let loadedServices = {};
    export let servicesAreaTexts = {};
    let massageServices = loadedServices.services.massage;
    let trainingServices = loadedServices.services.training;
</script>


<div class="w-full flex justify-center mb-3">
    <div class="text-gray-900 md:mt-0 m-0 sm:w-4/12/12 md:w-6/12 lg:w-6/12 leading-normal">
        <h1 class="pb-8 uppercase font-bold tracking-wide text-center">{servicesAreaTexts.intro}</h1>

        <Massage
        classicName={massageServices.classic.name}
        classicDescription={massageServices.classic.description}
        triggerName={massageServices.trigger.name}
        triggerDescription={massageServices.trigger.description}/>
        
         <MuayThai trainingServices={trainingServices}/>
        
        <p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
            {servicesAreaTexts.outro}
        </p>
    </div>
</div>