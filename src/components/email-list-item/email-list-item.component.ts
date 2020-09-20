import IComponent from '../../types';

const VALID_EMAIL_CLASSNAME = 'valid';
const INVALID_EMAIL_CLASSNAME = 'invalid';
const EMAIL_CLASSNAME = 'email-list-item';

class EmailListItem implements IComponent {
    private email: string;

    element: HTMLElement;

    constructor(email: string) {
        this.email = email;

        this.element = this.render();
    }

    private markup(): string {
        return `
            <span class="email">${this.email}</span>
            <span class="icon-remove"></span>
        `;
    }

    render(): HTMLElement {
        const el = document.createElement('span');

        const validationClass = this.isEmailValid()
            ? VALID_EMAIL_CLASSNAME
            : INVALID_EMAIL_CLASSNAME;
        el.classList.add(EMAIL_CLASSNAME);
        el.classList.add(validationClass);

        el.innerHTML = this.markup();

        return el;
    }

    private isEmailValid(): boolean {
        const regexp = /\S+@\S+\.\S+/;

        return regexp.test(this.email.toLowerCase());
    }
}

export default EmailListItem;
