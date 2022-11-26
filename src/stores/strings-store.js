import { writable } from "svelte/store";
import { browser } from "$app/environment";

const storedStringValues = browser && localStorage.getItem("stringValues") || {};
export const stringValues = writable(storedStringValues);

stringValues.subscribe((value) => 
browser && (localStorage.setItem("stringValues", JSON.stringify(value)))
);

// function setInLocalStorage(keyValue, value) {
//     try {
//         localStorage.setItem(keyValue, JSON.stringify(value));
//     } catch (error) {
//         console.log('Error in local storage', error);
//         setInLocalStorage(keyValue, JSON.parse(localStorage.getItem(keyValue)));
//     }
// }