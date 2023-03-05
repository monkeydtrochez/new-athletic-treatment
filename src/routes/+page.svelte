<script>
    /** @type {import('./$types').PageData} */
    
    import HeroBanner from "../components/HeroBanner.svelte";
    import Navigation from "../components/UI/Navigation.svelte";
    import About from "../components/About.svelte";
    import Services from "../components/Services.svelte"
    import Border from "../components/UI/Border.svelte";
    import Contact from "../components/Contact.svelte";
    import Footer from '..//components/UI/Footer.svelte';
    import ContactForm from '../components/ContactForm.svelte';
    
    import { stringValues } from "../stores/strings-store.js";
    
    export let data;

    $stringValues = data.fetchedStringValues;
    
    function navigateTo(event) {
        console.log(event.detail)
    }
    
    let showContactForm = false;
    function openContactForm() {
        showContactForm = true;
    }
    
    function closeContactForm() {
        showContactForm = false;
    }
    
    // TODO: Fixa services (products) component
    // TODO: Fixa employees (clients) component
    // TODO: Fixa navigeringen!
</script>

<svelte:head>
<title>Athletic Treatment</title>
</svelte:head>

<section class="navigation">
    <Navigation on:navigate={navigateTo}/>
</section>

<section id="hero">
    <HeroBanner />
</section>

<section id="about-us">
    <About aboutAreaTexts={$stringValues.aboutAreaTexts}/>
</section>

<Border />

<section id="services">
    <Services servicesAreaTexts={$stringValues.servicesAreaTexts}/>
</section>

<section class="contact" id="contact">
    <Contact contactAreaTexts={$stringValues.contactAreaTexts} on:click={openContactForm}/>
</section>

<section class="footer">
    <Footer on:navigate={navigateTo}/>
</section>

{#if showContactForm === true}
<ContactForm rightBtnText="Skicka" leftBtnText="Avbryt" on:cancel={closeContactForm} />
{/if}