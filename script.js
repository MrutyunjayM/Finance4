import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// 🔥 Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuSKstc9p_nhqLrqZKY_VHsr8pISLlKTY",
    authDomain: "financeportal-63336.firebaseapp.com",
    projectId: "financeportal-63336",
    storageBucket: "financeportal-63336.firebasestorage.app",
    messagingSenderId: "503084246152",
    appId: "1:503084246152:web:1c254a1d032e15655aab3d"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 List of 30 Members with Financial Details
const members = [
    { Name: "Shashikala", Savings: 5000, LoanInterest: 200, LoanPaid: 3000, Penalty: 0, LoanTaken: 7000 },
    { Name: "Mahadevi", Savings: 7000, LoanInterest: 300, LoanPaid: 5000, Penalty: 50, LoanTaken: 10000 },
    { Name: "Demavva", Savings: 4500, LoanInterest: 250, LoanPaid: 2000, Penalty: 20, LoanTaken: 6000 },
    { Name: "Shantavva", Savings: 6000, LoanInterest: 400, LoanPaid: 4000, Penalty: 0, LoanTaken: 8000 },
    { Name: "Savitri", Savings: 5200, LoanInterest: 300, LoanPaid: 3500, Penalty: 10, LoanTaken: 7500 },
    { Name: "Kasturi", Savings: 4800, LoanInterest: 150, LoanPaid: 2500, Penalty: 5, LoanTaken: 5000 },
    { Name: "Basavanevva", Savings: 5600, LoanInterest: 350, LoanPaid: 3000, Penalty: 0, LoanTaken: 6500 },
    { Name: "Kashavva", Savings: 6200, LoanInterest: 280, LoanPaid: 4500, Penalty: 15, LoanTaken: 9000 },
    { Name: "Kallavva", Savings: 5000, LoanInterest: 200, LoanPaid: 3200, Penalty: 10, LoanTaken: 7000 },
    { Name: "Mahadevi", Savings: 4000, LoanInterest: 250, LoanPaid: 2000, Penalty: 5, LoanTaken: 5000 },
    { Name: "Tanevva", Savings: 5300, LoanInterest: 300, LoanPaid: 3600, Penalty: 0, LoanTaken: 7500 },
    { Name: "Pattrevva", Savings: 5500, LoanInterest: 270, LoanPaid: 4100, Penalty: 8, LoanTaken: 8500 },
    { Name: "Girija", Savings: 6000, LoanInterest: 400, LoanPaid: 4000, Penalty: 0, LoanTaken: 8000 },
    { Name: "Rahhashree", Savings: 5800, LoanInterest: 320, LoanPaid: 3900, Penalty: 12, LoanTaken: 8200 },
    { Name: "Mahadevi", Savings: 5000, LoanInterest: 200, LoanPaid: 3000, Penalty: 0, LoanTaken: 7000 },
    { Name: "Kashavva.T", Savings: 5200, LoanInterest: 250, LoanPaid: 3100, Penalty: 10, LoanTaken: 7200 },
    { Name: "Mahadevi.M", Savings: 5800, LoanInterest: 330, LoanPaid: 3900, Penalty: 5, LoanTaken: 8200 },
    { Name: "Gangavva", Savings: 4900, LoanInterest: 220, LoanPaid: 2700, Penalty: 0, LoanTaken: 6700 },
    { Name: "Savitri", Savings: 6200, LoanInterest: 280, LoanPaid: 4500, Penalty: 15, LoanTaken: 9000 },
    { Name: "Riyana", Savings: 5300, LoanInterest: 300, LoanPaid: 3600, Penalty: 0, LoanTaken: 7500 },
    { Name: "Suvarna", Savings: 4800, LoanInterest: 150, LoanPaid: 2500, Penalty: 5, LoanTaken: 5000 },
    { Name: "Mallamma", Savings: 5600, LoanInterest: 350, LoanPaid: 3000, Penalty: 0, LoanTaken: 6500 },
    { Name: "Sharada", Savings: 6000, LoanInterest: 400, LoanPaid: 4000, Penalty: 0, LoanTaken: 8000 },
    { Name: "Shavaleela", Savings: 5800, LoanInterest: 320, LoanPaid: 3900, Penalty: 12, LoanTaken: 8200 },
    { Name: "Nagaratna", Savings: 5000, LoanInterest: 200, LoanPaid: 3000, Penalty: 0, LoanTaken: 7000 },
    { Name: "Kamallamma", Savings: 5200, LoanInterest: 250, LoanPaid: 3100, Penalty: 10, LoanTaken: 7200 },
    { Name: "Ratna", Savings: 5800, LoanInterest: 330, LoanPaid: 3900, Penalty: 5, LoanTaken: 8200 },
    { Name: "Jayashree", Savings: 4900, LoanInterest: 220, LoanPaid: 2700, Penalty: 0, LoanTaken: 6700 },
    { Name: "Mamataj", Savings: 6200, LoanInterest: 280, LoanPaid: 4500, Penalty: 15, LoanTaken: 9000 }
];

// 🔥 Function to Upload Bulk Member Data
async function addBulkMembers() {
    for (const member of members) {
        try {
            await setDoc(doc(db, "members", member.Name), member);
            console.log(`✅ Added: ${member.Name}`);
        } catch (error) {
            console.error("❌ Error adding member:", error);
        }
    }

    alert("🔥 30 Members' Details Uploaded Successfully!");
}

// ✅ Run the function once to upload members
addBulkMembers();
