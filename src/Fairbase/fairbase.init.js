import { initializeApp } from "firebase/app";
import firebaseConfig from "./fairbase.confige";

const initFairbase = ()=>{
    initializeApp(firebaseConfig)
}

export default initFairbase;