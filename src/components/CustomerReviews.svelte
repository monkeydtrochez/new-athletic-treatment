<script>
    import {fade} from 'svelte/transition'
    import { onMount } from 'svelte';
    import AstridVikgren from "../assets/reviews/astrid_vikgren.jpg";
    import BehnamRazaki from "../assets/reviews/behnam_razaki.jpg";
    import DaniellaEshagi from "../assets/reviews/daniella_eshagi.jpg";
    import JacobStenberg from "../assets/reviews/jacob_stenberg.jpg";
    import JoakimHagg from "../assets/reviews/joakim_hagg.jpg";
    import LeoEshagi from "../assets/reviews/leo_eshagi.jpg";
    import NicholasBryant from "../assets/reviews/nicholas_bryant.jpg";
    import RobinSundlof from "../assets/reviews/robin_sundlof.jpg";
    
    
    const carouselPhotos = [
    AstridVikgren,
    BehnamRazaki,
    DaniellaEshagi,
    JacobStenberg,
    JoakimHagg,
    LeoEshagi,
    NicholasBryant,
    RobinSundlof
    ]
    
    let index = 0
    
    function next() {
        index = (index + 1) % carouselPhotos.length
    }
    onMount(() => {
        setInterval(next, 5000)
    })
</script>



<div class="w-full flex justify-center mb-3">
    <div class="sm:w-4/12/12 md:w-6/12 lg:w-6/12 text-gray-900 mt-6 leading-normal current-img-slot">
        {#each [carouselPhotos[index]] as src (index)}
        <img class="grid" transition:fade="{{ duration: 500 }}" {src} alt="" />	
        {/each}
    </div>
</div>


<style lang="css" scoped>
    h1 {
        @apply text-center;
    }
    
    img {
        grid-row: 1;
        grid-column: 1;
    }
    
    .current-img-slot {
        display: grid;
        place-items: center;
    }
</style>