import IComponent from '../../types';
import EmailListItem from '../email-list-item';

const REMOVE_CLASSNAME = 'icon-remove';

class EmailList implements IComponent {
    element: HTMLElement;

    constructor() {
        this.element = this.render();

        this.subscribe();
    }

    private removeEmail(e: MouseEvent): void {
        const target = e.target as Element;

        if (target.classList.contains(REMOVE_CLASSNAME)) {
            this.element.removeChild(target.parentNode);
        }
    }

    // eslint-disable-next-line class-methods-use-this
    render(): HTMLElement {
        const el = document.createElement('span');

        return el;
    }

    addEmail(value: string): void {
        const emailEl = new EmailListItem(value).element;

        this.element.appendChild(emailEl);
    }

    getEmailsCount(): number {
        return this.element.children.length;
    }

    subscribe(): void {
        this.element.addEventListener('click', this.removeEmail.bind(this));
    }
}

export default EmailList;
