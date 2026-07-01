const firebaseConfig = {
  apiKey: "AIzaSyBnJjoIqvSA_FdJ9PeTHY3kQCRPDaUJOhw",
  authDomain: "crafterspace-41a41.firebaseapp.com",
  projectId: "crafterspace-41a41",
  storageBucket: "crafterspace-41a41.firebasestorage.app",
  messagingSenderId: "173170761662",
  appId: "1:173170761662:web:5249c33a3aee0e943ba3ef",
  measurementId: "G-25F7HMV589"
}

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Search Function

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    let filter =
    searchInput.value.toLowerCase();

    let cards =
    document.querySelectorAll(".card");

    cards.forEach(card => {

        let text =
        card.querySelector("p")
        .textContent
        .toLowerCase();

        if(text.includes(filter))
        {
            card.style.display = "flex";
        }
        else
        {
            card.style.display = "none";
        }

    });

});


// Popup Elements

const popup =
document.getElementById("popup");

const popupImg =
document.getElementById("popupImg");

const popupTitle =
document.getElementById("popupTitle");

const downloadBtn =
document.getElementById("downloadBtn");

const closeBtn =
document.querySelector(".close");


// Open Popup

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const img =
        card.querySelector("img");

        const title =
        card.querySelector("p");

        popup.style.display = "flex";

        popupImg.src =
        img.src;

        popupTitle.textContent =
        title.textContent;

        downloadBtn.href =
        img.src;

        downloadBtn.setAttribute(
            "download",
            title.textContent + ".png"
        );

    });

});


// Close Button

closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});


// Click Outside Popup

window.addEventListener("click", (e) => {

    if(e.target === popup)
    {
        popup.style.display = "none";
    }

});


// ESC Key Close

document.addEventListener("keydown", (e) => {

    if(
        e.key === "Escape" &&
        popup.style.display === "flex"
    )
    {
        popup.style.display = "none";
    }

});

function openMenu()
{
document.getElementById(
"sideMenu"
).style.left = "0";
}

function closeMenu()
{
document.getElementById(
"sideMenu"
).style.left = "-320px";
}

// INTERFACE TOGGLE LOGIC (FOR SIGN IN / SIGN UP / FORGOT PASSWORD)
let currentMode = "signin"; 

function toggleAuthMode() {
    let title = document.getElementById("auth-title");
    let mainBtn = document.getElementById("main-auth-btn");
    let prompt = document.getElementById("auth-switch-prompt");
    let link = document.getElementById("auth-switch-link");
    let forgotLink = document.getElementById("forgot-link-area");
    let passwordGroup = document.getElementById("password-group");

    // Form ko reset karne ke liye jab mode change ho
    passwordGroup.style.display = "block";
    forgotLink.style.display = "block";

    if (currentMode === "signin") {
        title.innerText = "Create Your Account";
        mainBtn.innerText = "Sign Up";
        prompt.innerText = "Already have an account?";
        link.innerText = "Sign In";
        forgotLink.style.display = "none";
        currentMode = "signup";
    } else {
        title.innerText = "Sign In to CrafterSpace";
        mainBtn.innerText = "Sign In";
        prompt.innerText = "Don't have an account?";
        link.innerText = "Sign Up";
        currentMode = "signin";
    }
}

function showForgotPassword() {
    document.getElementById("auth-title").innerText = "Reset Password";
    document.getElementById("password-group").style.display = "none";
    document.getElementById("forgot-link-area").style.display = "none";
    document.getElementById("main-auth-btn").innerText = "Send OTP / Reset Link";
    document.getElementById("auth-switch-prompt").innerText = "Back to";
    document.getElementById("auth-switch-link").innerText = "Sign In";
    currentMode = "signup"; // Toggle handles switching back
}

// Jab user Sign In ya Sign Up form submit karega
document.getElementById("auth-form").addEventListener("submit", function(event) {
    // 1. Browser ko default reload hone se roko
    event.preventDefault(); 
    
    // 2. User ko success message dikhao
    alert("Welcome to CrafterSpace! Login Successful.");
    
    // 3. 🔑 MAIN MAGIC: Login box ko screen se hata do
    document.getElementById("auth-modal").style.display = "none";
});

// Jab user "Continue with Google" button dabaaye
function handleGoogleLogin() {
    // 1. Google Auth Provider ka ek naya dabba (instance) ready karo
    const provider = new firebase.auth.GoogleAuthProvider();
    
    // 2. Browser ko bolo ke Google ka login popup screen khole
    auth.signInWithPopup(provider)
        .then((result) => {
            // Agar login successful ho gaya:
            alert("Welcome to CrafterSpace! Google Sign-In Successful.");
            
            // 🔑 Humne jo pehle seekha tha: modal box ko screen se chhupa do
            document.getElementById("auth-modal").style.display = "none";
        })
        .catch((error) => {
            // Agar koi error aaye (jaise network issue ya popup cancel karna)
            console.error("Login mein galti hui: ", error.message);
            alert("Login Failed: " + error.message);
        });
}

function handleAdminLogin() {
    // Input field se value lene ke liye (ensure karo tumhare HTML mein ye IDs ho)
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    // Check karo agar admin details match karti hain
    if (emailInput === "admin" && passwordInput === "admin") {
        alert("Welcome Admin! Redirecting to Dashboard...");
        
        // Modal ko band karo
        document.getElementById("auth-modal").style.display = "none";
        
        // Yahan tum dashboard ka page open kar sakte ho
        // window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid Username or Password!");
    }
}