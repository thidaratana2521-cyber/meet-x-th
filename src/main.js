import { app } from "../firebase.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const status = document.querySelector("#firebase-status");
if (status) {
  status.textContent = `เริ่มต้น Firebase แล้ว (โปรเจกต์: ${app.options.projectId})`;
}

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("ล็อกอินอยู่ด้วยอีเมล:", user.email, "UID:", user.uid);
  } else {
    console.log("ยังไม่ได้ล็อกอิน");
  }
});

export async function loginUser(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user;
}

export async function logoutUser() {
  await signOut(auth);
}

export async function saveTestNote(messageText) {
  const docRef = await addDoc(collection(db, "test_notes"), {
    text: messageText,
    uid: auth.currentUser ? auth.currentUser.uid : null,
    createdAt: serverTimestamp()
  });
  return docRef.id;
}

export async function loadTestNotes() {
  const snapshot = await getDocs(collection(db, "test_notes"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
