<script>
    import Social from "./Social.svelte";
    import LogoImage from "../../assets/Atletic_Transp.png";
</script>

<footer class="font-sans bg-black text-white py-8 px-4">
    <div class="mx-auto max-w-xl flex justify-between">
        <ul class="text-sm text-gray-700 list-none p-0 md:flex">
            <li> <a href="/" class="block mr-4">
                <img src={LogoImage} class="h-10 sm:h-20" alt="logo">
            </a></li>
            <li><a href="#about-us" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"  >Om oss</a></li>
            <li><a href="#massage" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline"  >Massage</a></li>
            <li><a href="#training" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline" >Träning</a></li>
            <li><a href="#employees" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline" >Medarbetare</a></li>
            <li><a href="#reviews" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline" >Kundernas ord</a></li>
            <li><a href="#contact" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 no-underline" >Kontakta oss</a></li>
            <li><a href="https://www.bokadirekt.se/places/athletic-treatment-47446" class="inline-block py-2 px-3 text-gray-500 hover:text-gray-400 ">Boka tid</a></li>
        </ul>
        <Social on:openModal />
    </div>
    <p class="inline-block py-2 px-3 text-gray-700 text-xs"> ©2022 Athletic Treatment</p>
</footer>