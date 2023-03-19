
import { ref, child, get} from "firebase/database";

export async function fetchStringValues(database) {
    const dbRef = ref(database);
    
    const result = await Promise.all([
        fetchAboutAreaTexts(dbRef),
        fetchServicesAreaTexts(dbRef),
        fetchClientAreaTexts(dbRef),
        fetchContactAreaTexts(dbRef)
    ])
        .then(res => res.reduce((prev, curr) =>  ({...curr, ...prev})));
        
        return new Promise((resolve) => {
            resolve(result);
        })
    }
    
    function fetchContactAreaTexts(dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'contactAreaTexts'))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    const contactAreaTexts = snapshot.val();
                    resolve({ contactAreaTexts });
                } else {
                    reject("Could not find any contact area texts!")
                }
            })
            .catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }
    
    function fetchClientAreaTexts(dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'employeesAreaTexts'))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    const employeesAreaTexts = snapshot.val();
                    resolve({ employeesAreaTexts });
                } else {
                    reject("Could not find any employee area texts!")
                }
            })
            .catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }
    
    function fetchAboutAreaTexts (dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'aboutAreaTexts'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const aboutAreaTexts = snapshot.val();
                    resolve({ aboutAreaTexts });
                } else {
                    reject("Could not find any about area texts!");
                }
            }).catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }
    
    function fetchServicesAreaTexts(dbRef) {
        return new Promise((resolve, reject) => {
            get(child(dbRef, 'servicesAreaTexts'))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const servicesAreaTexts = snapshot.val();
                    resolve({ servicesAreaTexts });
                } else {
                    reject("Could not find any texts for the services area!");
                }
            }).catch((error) => {
                console.log("Error occured! ", error);
            });
        });
    }