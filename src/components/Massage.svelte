<script>
    import ProductImg1 from "../assets/massage-1.jpg";
    import ProductImg2 from "../assets/massage-2.jpg";
    import ProductImg3 from "../assets/massage-3.jpg";
    import ProductImg4 from "../assets/massage-4.jpg";
    
    export let introText;
    export let outroText;
    export let massageTypes = {};
</script>

<div class="w-full flex justify-center mb-3">
    <div class="text-gray-900 md:mt-0 m-0 sm:w-4/12/12 md:w-6/12 lg:w-6/12 leading-normal">
        <h1 class="pb-8 uppercase font-bold tracking-wide text-center">{introText}</h1>
        
        <div class="my-0 font-sans">
            <div class="w-1/2 h-1/2 flex justify-between">
                <img src="{ProductImg1}" alt="arm-tag" class="h-1/2 mr-px rounded-lg">
                <img src="{ProductImg2}" alt="arm-tag" class="h-1/2 ml-px rounded-lg">
            </div>
            <div class="massage-classic mt-4">
                <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{massageTypes.classic.name}</h1>
                <p class="leading-normal mb-4 text-gray-700">
                    {massageTypes.classic.description}
                </p>
            </div>
            <div class="massage-trigger mt-4">
                <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{massageTypes.trigger.name}</h1>
                <p class="leading-normal mb-4 text-gray-700">
                    {massageTypes.trigger.description}
                </p>
            </div>
            <div class="massage-trigger mt-4">
                <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{massageTypes.cupping.name}</h1>
                <p class="leading-normal mb-4 text-gray-700">
                    {massageTypes.cupping.description}
                </p>
            </div>
            <div class="massage-trigger mt-4">
                <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{massageTypes.sports.name}</h1>
                <p class="leading-normal mb-4 text-gray-700">
                    {massageTypes.sports.description}
                </p>
            </div>
            <div class="massage-trigger mt-4">
                <h1 class="uppercase tracking-wide mb-4 text-gray-700 font-bold text-left">{massageTypes.companyMassage.name}</h1>
                <p class="leading-normal mb-4 text-gray-700">
                    {massageTypes.companyMassage.description}
                </p>
            </div>
            <div class="w-1/2 h-1/2 flex justify-between">
                <img src="{ProductImg3}" alt="arm-tag" class="h-1/2 mr-px rounded-lg">
                <img src="{ProductImg4}" alt="arm-tag" class="h-1/2 ml-px rounded-lg">
            </div>
        </div>

        <p class="leading-normal mt-4 mb-4 font-bold text-gray-700 text-center">
            {outroText}
        </p>
    </div>
</div>