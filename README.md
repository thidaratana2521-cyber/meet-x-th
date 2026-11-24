# Meets'x Thailand

แพลตฟอร์มโซเชียลและ Messenger MVP สำหรับประเทศไทย

## ฟีเจอร์

- สมัครสมาชิกและเข้าสู่ระบบด้วยอีเมล/รหัสผ่าน
- รีเซ็ตรหัสผ่านทางอีเมล
- ออกจากระบบ
- แก้ไขชื่อและรูปโปรไฟล์
- โพสต์ข้อความสาธารณะแบบเรียลไทม์
- รายชื่อสมาชิก
- Messenger แบบห้องสนทนาเรียลไทม์
- รองรับมือถือและเดสก์ท็อป
- ไม่มีการเก็บบัตรประชาชนหรือเอกสารยืนยันตัวตน

## ตั้งค่า Firebase

1. เปิด Firebase Console และสร้างโปรเจกต์
2. เปิด **Authentication > Sign-in method > Email/Password**
3. สร้าง **Firestore Database**
4. คัดลอก Web Firebase Config แล้วเพิ่มค่าก่อนโหลดหน้าเว็บด้วยตัวแปร:

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

วางโค้ดด้านบนก่อน `<script type="module">` ใน `index.html` หรือบันทึก JSON ลง localStorage ด้วย key `meetsxFirebaseConfig` จากคอนโซลเบราว์เซอร์

> ห้ามนำ API key หรือ Firebase Admin private key ของโครงการมาเผยแพร่ในโค้ดฝั่ง frontend

## Deploy

สามารถเปิด `index.html` ผ่าน static hosting เช่น Firebase Hosting, GitHub Pages หรือ Vercel ได้
