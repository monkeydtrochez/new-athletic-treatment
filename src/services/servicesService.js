import { child, ref, get } from "firebase/database";

export async function initializeServices(database) {
    const dbRef = ref(database);

    return new Promise((resolve, reject) => {
        get(child(dbRef, 'services')).then((snapshot) => {
            if(snapshot.exists()) {
                const services = snapshot.val();
                resolve({services});
            } else {
                reject("Could not find any services");
            }
        }).catch((error) => {
            console.log("Error occured! ",  error);
        });
    });
}