import EmailListItem from '../email-list-item';

const REMOVE_CLASSNAME = 'icon-remove';

class EmailList {
    element: HTMLElement;

    constructor() {
        this.element = this.render();

        this.subscribe();
    }

    // eslint-disable-next-line class-methods-use-this
    private render(): HTMLElement {
        const el = document.createElement('span');

        return el;
    }

    addEmail(value: string): void {
        const emailEl = new EmailListItem(value).element;

        this.element.appendChild(emailEl);
    }

    private removeEmail(e: MouseEvent): void {
        const target = e.target as Element;

        if (target.classList.contains(REMOVE_CLASSNAME)) {
            this.element.removeChild(target.parentNode);
        }
    }

    private subscribe(): void {
        this.element.addEventListener('click', this.removeEmail.bind(this));
    }
}

export default EmailList;
