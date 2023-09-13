
const createButton = (title, contentH, contentB)=>{
    const openBtn = document.querySelector(".open-modal-btn");
    const modal = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-modal-btn");

    openBtn.innerHTML = title;

    const contentHeading = document.querySelector(".heading");
    contentHeading.innerHTML = contentH;

    const contentBody = document.querySelector(".modal-content");
    contentBody.innerHTML = contentB;

    function openModal() {
        modal.classList.remove("hide");
    }

    function closeModal(e, clickedOutside) {
        if (clickedOutside) {
            if (e.target.classList.contains("modal-overlay"))
                modal.classList.add("hide");
        } else modal.classList.add("hide");
    }

    openBtn.addEventListener("click", openModal);
    modal.addEventListener("click", (e) => closeModal(e, true));
    closeBtn.addEventListener("click", closeModal);
}

const createBtn = document.querySelector('.create')

createBtn.addEventListener('click', () => {
    let title = prompt("Enter your pop-up title: ");
    let contentH = prompt("Enter the content heading of your pop-up: ");
    let contentB = prompt("Enter the content body of your pop-up: ");
    createButton(title, contentH, contentB);
})

const displayBtn = document.querySelector('.display')

displayBtn.addEventListener('click', ()=>{
    const btn = document.querySelector(".open-modal-btn-wrapper");

btn.classList.remove("hide");
})


const closingBtn = document.querySelector('.close')

closingBtn.addEventListener('click', ()=>{
    const dbtn = document.querySelector(".open-modal-btn-wrapper");

    dbtn.classList.add("hide");

})

