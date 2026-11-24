# Meets'x Thailand

แพลตฟอร์มโซเชียลและ Messenger MVP สำหรับประเทศไทย

## ฟีเจอร์พื้นฐาน

- สมัครสมาชิกและเข้าสู่ระบบด้วยอีเมล/รหัสผ่าน
- รีเซ็ตรหัสผ่านทางอีเมล
- ออกจากระบบ
- แก้ไขชื่อและรูปโปรไฟล์
- โพสต์ข้อความสาธารณะแบบเรียลไทม์
- รายชื่อสมาชิก
- Messenger แบบห้องสนทนาเรียลไทม์
- รองรับมือถือและเดสก์ท็อป
- ไม่มีการเก็บบัตรประชาชนหรือเอกสารยืนยันตัวตน

## เริ่มใช้งาน Firebase

1. เปิด Firebase Console และสร้างโปรเจกต์
2. เปิด **Authentication > Sign-in method > Email/Password**
3. สร้าง **Firestore Database** ด้วยโหมด Production
4. เปิด **Project Settings > General > Your apps** แล้วสร้าง Web App
5. เพิ่ม Firebase Config ในส่วน `<head>` หรือก่อน `<script type="module">`:

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

หรือบันทึก JSON ลง localStorage โดยใช้คอนโซลเบราว์เซอร์:

```javascript
localStorage.setItem('meetsxFirebaseConfig', JSON.stringify({
  apiKey: '...', authDomain: '...', projectId: '...',
  storageBucket: '...', messagingSenderId: '...', appId: '...'
}));
location.reload();
```

Deploy rule ของ Firestore:

```bash
firebase deploy --only firestore:rules,hosting
```

ห้ามนำ Firebase Admin private key หรือ service account JSON มาใส่ในโปรเจกต์ฝั่งหน้าเว็บ

## Deploy แบบ Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting firestore
firebase deploy --only firestore:rules,hosting
```

## เกณฑ์ความปลอดภัยก่อน Production

- เปิด Email Enumeration Protection ใน Firebase Authentication หาก Firebase Console รองรับ
- กำหนด Authorized Domains
- ตรวจสอบขนาดข้อความและอัตราการส่งเพื่อป้องกันสแปม
- เพิ่มรูปโปรไฟล์ผ่าน URL แบบควบคุม; หลีกเลี่ยง script หรือข้อมูล HTML
- ใช้ App Check ก่อนเปิดบริการสาธารณะ
