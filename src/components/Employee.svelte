<script>
    import NicklasImg from "../assets/nicklas-joabsson.jpg";
    
    export let employee = {};
</script>

<div class="w-1/2 mx-auto rounded-lg overflow-hidden" >
    <img src="{NicklasImg}" alt="employe-{employee.name}">
</div>

<div class="mt-4">
    <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{employee.name}</h1>
    <p class="leading-normal mb-4 text-gray-700">
        {employee.title}
    </p>
    <p class="leading-normal mb-4 text-gray-700">
        {employee.title}
        {employee.description}
    </p>
    <h3 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{employee.experienceTitle}</h3>
    {#each employee.skills as skill}
    <p class="leading-normal mb-4 text-gray-700">{skill.skill}</p>
    {/each}
</div>
<p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
    {employee.outro}
</p>