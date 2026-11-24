# Meets'x Thailand

แพลตฟอร์มโซเชียลและ Messenger MVP สำหรับประเทศไทย โดยไม่เก็บบัตรประชาชนหรือเอกสารยืนยันตัวตน

## ฟีเจอร์

- สมัครสมาชิก/เข้าสู่ระบบด้วยอีเมลและรหัสผ่าน และขอลิงก์รีเซ็ตรหัสผ่าน
- ออกจากระบบและแก้ไขชื่อ/รูปโปรไฟล์
- โพสต์สาธารณะ
- ค้นหาสมาชิก ส่งคำขอเป็นเพื่อน ยอมรับ/ปฏิเสธ และยกเลิกคำขอ
- แสดงรายชื่อเพื่อนที่ตอบรับแล้ว
- แชต Messenger แบบเรียลไทม์ได้เฉพาะเพื่อนที่ตอบรับแล้ว
- Firestore Security Rules จำกัดคำขอเพื่อนและการอ่าน/ส่งข้อความให้ผู้เกี่ยวข้อง

## ตั้งค่า Firebase ก่อนใช้งาน

1. สร้าง Firebase project และเพิ่ม Web app
2. เปิด **Authentication > Sign-in method > Email/Password**
3. สร้าง Firestore Database ใน Production mode
4. เพิ่ม Web Firebase Config ก่อน `<script type="module">` ใน `index.html`:

```html
<script>
  window.MEETSX_FIREBASE_CONFIG = {
    apiKey: "...",
    authDomain: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  };
</script>
```

หรือใส่ JSON ลง localStorage ด้วย key `meetsxFirebaseConfig` จาก browser developer console

5. Deploy `firestore.rules` และเว็บไซต์:

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only firestore:rules,hosting
```

`firebase.json` ตั้งค่า Hosting ให้เผยแพร่ไฟล์จาก repository root

> ห้ามนำ Firebase Admin private key/service account JSON มาใส่ในหน้าเว็บ ห้ามใช้ Firestore test mode สำหรับข้อมูลจริง

## ทดสอบการเชื่อมต่อระหว่างบัญชี

1. ตั้งค่า Firebase Config แล้ว deploy rules และ hosting.
2. สมัครบัญชีด้วยอีเมล 2 บัญชีในคนละ browser/profile.
3. จากบัญชีแรก เปิดแท็บ **เพื่อน**, ค้นหาชื่อบัญชีที่สอง แล้วกด **เพิ่มเพื่อน**.
4. ในบัญชีที่สอง ยอมรับคำขอ; ทั้งสองบัญชีจะเห็นกันในรายชื่อเพื่อน.
5. กด **ส่งข้อความ** และส่งทดสอบ ข้อความจะซิงก์แบบเรียลไทม์.

ระบบแชตจำกัดเฉพาะเพื่อนที่ตอบรับแล้ว และกฎ Firestore ตรวจสอบสิทธิ์ฝั่ง server ด้วย

## ข้อจำกัด MVP

- ต้องมี Firebase project/config ของเจ้าของเว็บจึงจะออนไลน์จริงได้
- ไม่มีการแนบรูป/ไฟล์ในข้อความ, group chat, read receipts, typing indicators หรือ push notifications ในรุ่นนี้
- ก่อนเปิดสาธารณะ ควรเปิด Firebase App Check, ตั้ง authorized domains, ตรวจสอบ quota และทดสอบ Firestore Rules ด้วย Firebase Emulator Suite
