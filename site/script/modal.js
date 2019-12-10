let terug = document.querySelectorAll('.terug');

const modal = {
    content: document.querySelectorAll('.modalContent'),
    buttons: document.querySelectorAll('.modalButton'),

    makeBackground() {
        let background = document.createElement('div');
        background.classList.add('modal__background');
        background.addEventListener('click', () => this.close());
        return background;
    },
    makeModal() {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.addEventListener('click', (evt) => evt.stopPropagation());
        return modal;
    },
    makeCloseButton() {
        let closeButton = document.createElement('div')
        closeButton.classList.add('modal__close--button');
        closeButton.innerHTML = '&#x00D7';
        closeButton.addEventListener('click', () => this.close());
        return closeButton;
    },
    open(elem) {
        this.background = this.makeBackground();
        this.closeButton = this.makeCloseButton();
        this.modal = this.makeModal();

        this.modal.appendChild(this.closeButton);
        this.modal.appendChild(elem);
        this.background.appendChild(this.modal);
        document.body.appendChild(this.background);
        document.body.style.overflow = 'hidden';
    },
    close() {
        this.modal.innerHTML = '';
        document.body.removeChild(this.background);
        document.body.style.overflow = 'initial';
    }
};

for (let i = 0; i < modal.content.length; i++) {
    modal.content[i].parentNode.removeChild(modal.content[i]);
};

for (let i = 0; i < terug.length; i++) {
    terug[i].addEventListener('click', () => modal.close());
}



for (let i = 0; i < modal.buttons.length; i++) {
    modal.buttons[i].addEventListener('click', () => {
        let content = modal.content[i];
        modal.open(content);
    });
};