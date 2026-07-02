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

document.querySelector(
".menu-btn"
).classList.add(
"rotate"
);
}

function closeMenu()
{
document.getElementById(
"sideMenu"
).style.left = "-320px";
document.querySelector(
".menu-btn").classList.remove(
"rotate"
);
}

// Jab user scroll karega, button dikhega
window.onscroll = function() {
    var mybutton = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Jab click karenge, toh top par chale jayenge
document.getElementById("topBtn").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
