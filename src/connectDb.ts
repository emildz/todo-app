import  {initializeApp,cert, getApps} from 'firebase-admin/app';
import  { getFirestore } from 'firebase-admin/firestore'; 
import serviceAccount from '../credentials.json';

export const connectDb = () => {
if (!getApps().length){
initializeApp({
    credential: cert(serviceAccount as any)
});
}
return getFirestore();
}