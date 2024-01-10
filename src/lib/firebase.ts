import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'brainiac-a2d52.firebaseapp.com',
  projectId: 'brainiac-a2d52',
  storageBucket: 'brainiac-a2d52.appspot.com',
  messagingSenderId: '1004069634694',
  appId: '1:1004069634694:web:85092e6dc690b0c5774707',
  measurementId: 'G-LXY2S8CY7L',
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToFirebase(image_url: string, name: string) {
  try {
    const response = await fetch(image_url);
    const buffer = await response.arrayBuffer();
    const file_name = name.replace(' ', '') + Date.now + '.jpeg';
    const storageRef = ref(storage, file_name);
    await uploadBytes(storageRef, buffer, {
      contentType: 'image/jpeg',
    });
    const firebase_url = await getDownloadURL(storageRef);
    return firebase_url;
  } catch (error) {
    console.error(error);
  }
}
