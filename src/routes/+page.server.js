/** @type {import('./$types').PageServerLoad} */
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import { getVariables } from "../helpers/environmentVariables";

import { fetchStringValues } from "../services/stringValueService";
import { initializeServices } from "../services/servicesService";
import { initializeEmployees } from "../services/employeeService";

export async function load({}) {
    const firebaseConfig = getVariables();
    const app = initializeApp(firebaseConfig);

    let fetchedStringValues;
    
    try {
        const database = getDatabase(app);
        await initializeServices(database);
        await initializeEmployees(database);
        await fetchStringValues(database).then((result) => {
            fetchedStringValues = result;
        }).catch((error) => {
            console.log(error);
        });
        
    } catch (error) {
        console.log("Error occured: ", error);
    }

    return {
        fetchedStringValues: fetchedStringValues
    }
}