<script>
    import servicesStore from "../stores/services-store"
    import {onDestroy} from 'svelte';

    export let servicesAreaTexts = {};
    let loadedServices;
    let unsubscribeServices;

    unsubscribeServices = servicesStore.subscribe(data => {
        console.log(data);
        loadedServices = data;
    });

    console.log("Services Data: ", loadedServices);
    console.log("Services Texts: ", servicesAreaTexts);

    onDestroy(() => {
        if(unsubscribeServices) {
            unsubscribeServices();
        }
    });
</script>


<!-- TODO FORTSÄTT HÄR! -->