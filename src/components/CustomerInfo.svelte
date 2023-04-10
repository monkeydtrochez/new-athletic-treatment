<script>
    export let customerInfo;
</script>


<div class="font-sans text-center py-8 px-4 lg:px-0 bg-gray-100">
    <div class="flex flex-col sm:flex-row bg-white w-2/3 m-auto shadow">
        <div class="w-full sm:w-3/4 px-6 pt-6 text-left flex flex-col justify-center">
            <h2 class="font-medium">{customerInfo.title} </h2>
            <p class="text-gray-700 mt-2 mb-6">
                {customerInfo.paragraph1}
            </p>
        </div>
    </div>
</div>