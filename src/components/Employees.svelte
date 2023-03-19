<script>
    import employeesStore from "../stores/employees-stores";
    import {onDestroy} from 'svelte';
    import Employee from "../components/Employee.svelte";
    
    export let employeesAreaTexts = {};
    let unsubscribeEmployees;
    let loadedEmployees;
    
    unsubscribeEmployees = employeesStore.subscribe(data => {
        loadedEmployees = data;
    });
    
    onDestroy(() => {
        if(unsubscribeEmployees) {
            unsubscribeEmployees();
        }
    })
</script>


<div class="w-full flex justify-center mb-3">
    <div class="text-gray-900 md:mt-0 m-0 sm:w-4/12/12 md:w-6/12 lg:w-6/12 leading-normal">
        <h1 class="pb-8 uppercase font-bold tracking-wide">{employeesAreaTexts.title}</h1>
        {#each loadedEmployees as loadedEmployee}
        <Employee employee={loadedEmployee}/>
        {/each}
        <p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
            {employeesAreaTexts.outro}
        </p>
    </div>
</div>

<style lang="css" scoped>
    h1 {
        @apply text-center;
    }
</style>