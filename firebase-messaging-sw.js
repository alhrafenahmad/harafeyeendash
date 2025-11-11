// web/firebase-messaging-sw.js

// ✅ استخدم واجهة compat (القديمة المتوافقة مع Flutter)
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// ✅ إعداد Firebase
firebase.initializeApp({
  apiKey: "AIzaSyB0FaKcgTm0ULE4Avg3oT8mrwVgFZQ92ng",
  authDomain: "hirafiyin-99cd5.firebaseapp.com",
  projectId: "hirafiyin-99cd5",
  storageBucket: "hirafiyin-99cd5.appspot.com",
  messagingSenderId: "558500384833",
  appId: "1:558500384833:web:cbe8998af6070923f5f6c0",
  measurementId: "G-8EV76Y8BF7"
});

// ✅ تهيئة خدمة الرسائل
const messaging = firebase.messaging();

// ✅ استقبال الإشعارات أثناء عمل التطبيق بالخلفية
messaging.onBackgroundMessage((payload) => {
  console.log("📩 إشعار في الخلفية:", payload);

  const notificationTitle = payload.notification?.title || "إشعار جديد";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "/icons/Icon-192.png",
    badge: "/icons/Icon-192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
