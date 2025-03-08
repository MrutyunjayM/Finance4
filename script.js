// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// ✅ Firebase Configuration (Replace with Your Own)
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

// ✅ Bulk Member Data
const members = [
  { Name: "Shashikala", Savings: 5000, LoanInterest: 200, LoanPaid: 3000, Penalty: 50, LoanTaken: 7000 },
  { Name: "Mahadevi", Savings: 6000, LoanInterest: 250, LoanPaid: 3200, Penalty: 40, LoanTaken: 6800 },
  { Name: "Demavva", Savings: 4500, LoanInterest: 180, LoanPaid: 2900, Penalty: 55, LoanTaken: 7200 },
  { Name: "Shantavva", Savings: 7000, LoanInterest: 300, LoanPaid: 4000, Penalty: 30, LoanTaken: 8000 },
  { Name: "Savitri", Savings: 8000, LoanInterest: 350, LoanPaid: 5000, Penalty: 25, LoanTaken: 9000 },
  { Name: "Kasturi", Savings: 5500, LoanInterest: 220, LoanPaid: 3100, Penalty: 45, LoanTaken: 7500 },
  { Name: "Basavanevva", Savings: 4700, LoanInterest: 190, LoanPaid: 2800, Penalty: 50, LoanTaken: 7300 },
  { Name: "Kashavva", Savings: 6900, LoanInterest: 280, LoanPaid: 3900, Penalty: 35, LoanTaken: 7800 },
  { Name: "Kallavva", Savings: 7200, LoanInterest: 310, LoanPaid: 4100, Penalty: 28, LoanTaken: 8200 },
  { Name: "Mahadevi", Savings: 6200, LoanInterest: 260, LoanPaid: 3500, Penalty: 42, LoanTaken: 7700 },
  { Name: "Tanevva", Savings: 5300, LoanInterest: 210, LoanPaid: 3300, Penalty: 48, LoanTaken: 7600 },
  { Name: "Pattrevva", Savings: 8100, LoanInterest: 360, LoanPaid: 5100, Penalty: 22, LoanTaken: 9100 },
  { Name: "Girija", Savings: 4600, LoanInterest: 170, LoanPaid: 2700, Penalty: 52, LoanTaken: 7100 },
  { Name: "Rahhashree", Savings: 7800, LoanInterest: 340, LoanPaid: 4800, Penalty: 27, LoanTaken: 8700 },
  { Name: "Mahadevi", Savings: 6200, LoanInterest: 260, LoanPaid: 3500, Penalty: 42, LoanTaken: 7700 },
  { Name: "Kashavva.T", Savings: 7400, LoanInterest: 320, LoanPaid: 4200, Penalty: 29, LoanTaken: 8300 },
  { Name: "Mahadevi.M", Savings: 6900, LoanInterest: 290, LoanPaid: 3700, Penalty: 37, LoanTaken: 7900 },
  { Name: "Gangavva", Savings: 5600, LoanInterest: 230, LoanPaid: 3400, Penalty: 46, LoanTaken: 7700 },
  { Name: "Savitri", Savings: 5200, LoanInterest: 200, LoanPaid: 3100, Penalty: 49, LoanTaken: 7500 },
  { Name: "Riyana", Savings: 5000, LoanInterest: 190, LoanPaid: 2900, Penalty: 50, LoanTaken: 7400 },
  { Name: "Suvarna", Savings: 6500, LoanInterest: 270, LoanPaid: 3600, Penalty: 39, LoanTaken: 7800 },
  { Name: "Mallamma", Savings: 7100, LoanInterest: 300, LoanPaid: 4100, Penalty: 31, LoanTaken: 8100 },
  { Name: "Sharada", Savings: 7300, LoanInterest: 320, LoanPaid: 4300, Penalty: 28, LoanTaken: 8200 },
  { Name: "Shavaleela", Savings: 7700, LoanInterest: 330, LoanPaid: 4700, Penalty: 26, LoanTaken: 8600 },
  { Name: "Nagaratna", Savings: 6800, LoanInterest: 290, LoanPaid: 3800, Penalty: 38, LoanTaken: 7900 },
  { Name: "Kamallamma", Savings: 7400, LoanInterest: 310, LoanPaid: 4200, Penalty: 30, LoanTaken: 8300 },
  { Name: "Ratna", Savings: 7800, LoanInterest: 340, LoanPaid: 4800, Penalty: 27, LoanTaken: 8700 },
  { Name: "Jayashree", Savings: 5900, LoanInterest: 250, LoanPaid: 3500, Penalty: 43, LoanTaken: 7600 },
  { Name: "Mamataj", Savings: 6300, LoanInterest: 270, LoanPaid: 3700, Penalty: 40, LoanTaken: 7700 },
];

// ✅ Function to Upload Data
async function uploadMembers() {
  const membersCollection = collection(db, "members");

  try {
    for (let i = 0; i < members.length; i++) {
      await addDoc(membersCollection, members[i]);
      console.log(`✅ ${members[i].Name} added successfully`);
    }
    alert("🎉 Bulk upload completed!");
  } catch (error) {
    console.error("❌ Error uploading members: ", error);
  }
}

// ✅ Call the function to upload
uploadMembers();
