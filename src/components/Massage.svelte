<script>
    import ProductImg1 from "../assets/massage-1.jpg";
    import ProductImg2 from "../assets/massage-2.jpg";
    import ProductImg3 from "../assets/massage-3.jpg";
    import ProductImg4 from "../assets/massage-4.jpg";

    export let massageServices = {};
</script>


<div class="my-0 font-sans">
    <div class="w-1/2 h-1/2 flex justify-between">
        <img src="{ProductImg1}" alt="arm-tag" class="h-1/2 mr-px rounded-lg">
        <img src="{ProductImg2}" alt="arm-tag" class="h-1/2 ml-px rounded-lg">
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
        <img src="{ProductImg3}" alt="arm-tag" class="h-1/2 mr-px rounded-lg">
        <img src="{ProductImg4}" alt="arm-tag" class="h-1/2 ml-px rounded-lg">
    </div>
</div>