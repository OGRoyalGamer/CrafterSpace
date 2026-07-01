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
