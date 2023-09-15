const btn = document.querySelector(".btn");
btn.addEventListener("click",openModal);

const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal_btn");

function openModal() {
    modal.classList.add("modal-show");
    document.addEventListener("click", closeModal);
    document.addEventListener("keydown", closeModal);
}

function closeModal(event){
    if (event.target === modal || event.target === modalBtn || event.key === "Escape") {
        modal.classList.remove("modal-show");
        document.removeEventListener("click",closeModal);
        document.removeEventListener("keydown",closeModal);
    }
}






// ------------------------------------------------------------------------
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click",()=>{
    new Modal("Lorem");
});

class Modal {
    constructor(text) {
        this.text = text;
        this.init();
    }

    init() {
        this.createMarkup();
        this.modal = document.getElementById("modal");
        this.closeBtn = this.modal.querySelector(".modal_btn");
        this.attachEvents();
    }

    createMarkup() {
        document.querySelector(".container").insertAdjacentHTML("beforeend",`
            <div id="modal" class="modal modal-show">
                <div class="modal_content">
                    <p class="modal_text">${this.text}</p>
                    <span class="modal_btn">&times</span>
                </div>
            </div>
        `)
    }

    attachEvents() {
        this.closeModal = this.closeModal.bind(this);
        window.addEventListener("click", this.closeModal);
        window.addEventListener("keydown", this.closeModal);
    }

    closeModal(event) {
        if (event.target === this.modal || event.target === this.closeBtn || event.key === "Escape") {
            this.modal.remove();
            this.modal = null;
            window.removeEventListener("click", this.closeModal);
            window.removeEventListener("keydown", this.closeModal);
        }
    }
}