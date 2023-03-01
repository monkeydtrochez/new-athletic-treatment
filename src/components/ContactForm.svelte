<script>
    import {createEventDispatcher} from "svelte";
    import {notEmpty, isValidEmail} from "../helpers/formValidation";
    
    import Modal from "./UI/Modal.svelte";
    import Button from "./UI/Button.svelte";
    import Input from "./UI/Input.svelte";
    
    let dispatch = createEventDispatcher();
    
    export let leftBtnText;
    export let rightBtnText;
    
    let name = "";
    let number = "";
    let emailAddress = "";
    
    $: isNameValid = !notEmpty(name);
    $: isNumberValid = !notEmpty(number);
    $: isEmailValid = !notEmpty(emailAddress) && isValidEmail(emailAddress);
    $: isFormValid = isNameValid && isNumberValid && isEmailValid;
    
    function closeModal() {
        dispatch('cancel');
    }
    
    async function submitForm() {
        // TODO: update api key!
        let myForm = document.getElementById("contactForm");
        let formData = new FormData(myForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        dispatch('cancel');

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log("Form submitted");
            dispatch('cancel');
        } else {
            console.log(result.message);
        }
    }
</script>

<Modal on:cancel>
    <form class="w-full max-w-lg" id="contactForm" name="contact-form" on:submit|preventDefault={submitForm} >
        <input type="hidden" name="access_key" value="4b7e53a9-0908-4331-8a7e-aec8617b848b">
        <input type="hidden" name="from_name" value="Athletic Treatment Webb">
        <input type="hidden" name="subject" value="En intresseanmälan har skickats in!" />
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 mb-6 md:mb-0">
                <Input 
                id="name" 
                label="Namn" 
                value={name}
                isValid={isNameValid} 
                errorMessage="Du måste ange ditt namn" 
                isMandatoryField={true}
                on:input={event => (name = event.target.value)} /> 
            </div>
            <div class="w-1/2 px-3 mb-6 md:mb-0">
                <Input 
                id="number" 
                label="Nummer" 
                value={number}
                isValid={isNumberValid} 
                errorMessage="Du måste ange ett telefonnummer" 
                isMandatoryField={true}
                on:input={event => (number = event.target.value)} />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <Input 
                id="email" 
                label="Mejladress" 
                value={emailAddress}
                isValid={isEmailValid} 
                errorMessage="Du måste ange en giltig mejladress" 
                isMandatoryField={true}
                on:input={event => (emailAddress = event.target.value)} />
            </div>
        </div>
    </form>
    <div slot="footer" class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <Button btnType="submit" btnText={rightBtnText} disabled={!isFormValid} on:click={submitForm}/>
        <Button btnText={leftBtnText} on:click={closeModal}/>
    </div>
</Modal>