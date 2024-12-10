import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const addPost = async (formData : any) => {
  try {
    // Referensi koleksi Firestore
    const collectionRef = collection(db, "posts");

    // Membuat dokumen baru
    const docRef = await addDoc(collectionRef, {
      nama: formData.nama || "",
      email: formData.email || "",
      GayaBelajar: formData.GayaBelajar || "",
      Suasana: formData.Suasana || "",
      Durasi: formData.Durasi || "",
      Interval: formData.Interval || "",
      Tujuan: formData.Tujuan || "",
      Kesulitan: formData.Kesulitan || "",
      Pemahaman: formData.Pemahaman || "",
      MetodeBelajar: formData.MetodeBelajar || "",
      createdAt: new Date(), 
    });

    console.log("Document added with ID:", docRef.id);

    return docRef; // Kembalikan referensi dokumen
  } catch (error) {
    console.error("Error adding document:", error);
    throw error; // Lempar error ke pemanggil
  }
};

export { addPost };
