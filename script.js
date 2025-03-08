import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuSKstc9p_nhqLrqZKY_VHsr8pISLlKTY",
  authDomain: "financeportal-63336.firebaseapp.com",
  projectId: "financeportal-63336",
  storageBucket: "financeportal-63336.firebasestorage.app",
  messagingSenderId: "503084246152",
  appId: "1:503084246152:web:1c254a1d032e15655aab3d"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Members List with Auto-Increment Account Numbers
const membersData = [
  "Shashikala", "Mahadevi", "Demavva", "Shantavva", "Savitri",
  "Kasturi", "Basavanevva", "Kashavva", "Kallavva", "Mahadevi",
  "Tanevva", "Pattrevva", "Girija", "Rahhashree", "Mahadevi",
  "Kashavva.T", "Mahadevi.M", "Gangavva", "Savitri", "Riyana",
  "Suvarna", "Mallamma", "Sharada", "Shavaleela", "Nagaratna",
  "Kamallamma", "Ratna", "Jayashree", "Mamataj"
];

// ✅ Function to Upload Bulk Data
async function uploadBulkMembers() {
  try {
    for (let i = 0; i < membersData.length; i++) {
      let accountNumber = (i + 1).toString(); // Assign Account Numbers 1 to 30

      // Dummy financial data (can be changed)
      let memberDetails = {
        Name: membersData[i],
        Savings: Math.floor(Math.random() * 5000) + 5000, // Random 5000-9999
        LoanInterest: Math.floor(Math.random() * 300) + 200, // Random 200-499
        LoanPaid: Math.floor(Math.random() * 5000) + 3000, // Random 3000-7999
        Penalty: Math.floor(Math.random() * 100) + 20, // Random 20-119
        LoanTaken: Math.floor(Math.random() * 10000) + 7000, // Random 7000-16999
        AccountNumber: accountNumber
      };

      // ✅ Upload to Firebase Firestore
      await setDoc(doc(db, "members", accountNumber), memberDetails);

      console.log(`✅ Member ${membersData[i]} (Acc No: ${accountNumber}) uploaded successfully!`);
    }
    alert("🎉 All 30 members uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading members: ", error);
    alert("⚠️ Failed to upload members. Check console for details.");
  }
}

// 🚀 Run Upload Function
uploadBulkMembers();
