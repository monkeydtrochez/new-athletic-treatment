<script>
    import {onMount} from 'svelte';
    import { initializeApp } from 'firebase/app';
    import { getDatabase } from "firebase/database";
    import { getVariables } from "../helpers/environmentVariables";
    
    import HeroBanner from "../components/HeroBanner.svelte";
    import Navigation from "../components/UI/Navigation.svelte";
    import About from "../components/About.svelte";
    import Border from "../components/UI/Border.svelte";
    import Footer from '..//components/UI/Footer.svelte';

    import { fetchStringValues } from "../services/stringValueService";
    import { initializeServices } from "../services/servicesService";
    import { initializeEmployees } from "../services/employeeService";

    import { stringValues } from "../stores/strings-store.js";
	
    
    const firebaseConfig = getVariables();
    console.log("Initialize app");
    const app = initializeApp(firebaseConfig);
    
    onMount(async () => {
        console.log("Initializing data");
        try {
            const database = getDatabase(app);
            await initializeServices(database); // products är nu services Tjänster
            await initializeEmployees(database); // clients är nu employees medarbetare
            await fetchStringValues(database).then((result) => {
                $stringValues = result;
            }).catch((error) => {
                console.log(error);
            });
            
        } catch (error) {
            console.log("Error occured: ", error);
        }
    });

    function navigateTo(event) {
        console.log(event.detail)
    }

// TODO: Fixa services (products) component
// TODO: Fixa employees (clients) component
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

<section class="about-us">
    <About aboutAreaTexts={$stringValues.aboutAreaTexts}/>
</section>

<Border />

<section class="footer">
    <Footer on:navigate={navigateTo}/>
</section>
