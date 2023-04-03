<script>
    export let aboutAreaTexts = {};
</script>

<div class="w-full flex justify-center mb-3">
    <div class="sm:w-4/12/12 md:w-6/12 lg:w-6/12 text-gray-900 mt-6 leading-normal">
        <h1 class="mb-4 uppercase font-bold tracking-wide">{aboutAreaTexts.title}</h1>
        <p class="mx-2">{aboutAreaTexts.paragraph1}
            <br/>
            {aboutAreaTexts.paragraph2}
        </p>
        <p class="mt-2 mx-2">
            {aboutAreaTexts.paragraph3}
        </p>
        <p class="mt-2 mx-2">
            {aboutAreaTexts.paragraph4}
        </p>
    </div>
</div>

<style lang="css" scoped>
    h1 {
        @apply text-center;
    }
</style>