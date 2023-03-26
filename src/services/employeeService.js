import { ref, child, get} from "firebase/database";


export async function initializeEmployees(database) {
    const dbRef = ref(database);

    return new Promise((resolve, reject) => {
        get(child(dbRef, 'employees')).then((snapshot) => {
            if(snapshot.exists()) {
                const employees = snapshot.val();
                resolve({employees});
            } else {
                reject("Could not find any employes!")
            }
        }).catch((error) => {
            console.log("Error occured! ",  error)
        }); 
    });
}