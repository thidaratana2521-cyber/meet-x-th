import { app } from "../firebase.js";

const status = document.querySelector("#firebase-status");
status.textContent = `เริ่มต้น Firebase แล้ว (โปรเจกต์: ${app.options.projectId})`;
