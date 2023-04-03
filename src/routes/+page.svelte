<script>
    /** @type {import('./$types').PageData} */
    import HeroBanner from "../components/HeroBanner.svelte";
    import Navigation from "../components/UI/Navigation.svelte";
    import About from "../components/About.svelte";
    import Massage from "../components/Massage.svelte";
    import MuayThai from "../components/MuayThai.svelte";
    import Employees from "../components/Employees.svelte";
    import Border from "../components/UI/Border.svelte";
    import Contact from "../components/Contact.svelte";
    import CustomerReviews from "../components/CustomerReviews.svelte";
    import Footer from '..//components/UI/Footer.svelte';
    import ContactForm from '../components/ContactForm.svelte';
    import { stringValues } from "../stores/strings-store.js";
    
    export let data;
    
    let loadedServices = data.loadedServices;
    let loadedEmployees = data.loadedEmployees;
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
</script>

<style>
    :global(HTML) {
        scroll-behavior: smooth;
    }
</style>

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

<section id="massage">
    <Massage
    introText={$stringValues.servicesAreaTexts.massageIntro}
    outroText={$stringValues.servicesAreaTexts.massageOutro}
    massageTypes={loadedServices.services.massage}/>
</section>

<Border />

<section id="training">
    <MuayThai
    introText={$stringValues.servicesAreaTexts.trainingIntro}
    outroText={$stringValues.servicesAreaTexts.trainingOutro}
    trainingServices={loadedServices.services.training}/>
</section>

<Border />

<section id="employees">
    <Employees loadedEmployees={loadedEmployees} employeesAreaTexts={$stringValues.employeesAreaTexts}/>
</section>

<Border />

<section id="reviews">
    <CustomerReviews/>
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