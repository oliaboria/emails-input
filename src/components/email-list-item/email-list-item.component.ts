import IComponent from '../../types';

import styles from './_email-list-item.scss';

const VALID_EMAIL_CLASSNAME = 'valid';
const INVALID_EMAIL_CLASSNAME = 'invalid';
const EMAIL_CLASSNAME = 'email-list-item';
const EMAIL_TEXT_CLASSNAME = 'email';
const ICON_REMOVE_CLASSNAME = 'icon-remove';

class EmailListItem implements IComponent {
    private email: string;

    element: HTMLElement;

    constructor(email: string) {
        this.email = email;

        this.element = this.render();
    }

    // eslint-disable-next-line class-methods-use-this
    private markup(): string {
        return `
            <span class="${styles[EMAIL_TEXT_CLASSNAME]}"></span>
            <span class="${styles[ICON_REMOVE_CLASSNAME]}"></span>
        `;
    }

    render(): HTMLElement {
        const el = document.createElement('span');

        const validationClass = this.isEmailValid()
            ? styles[VALID_EMAIL_CLASSNAME]
            : styles[INVALID_EMAIL_CLASSNAME];
        el.classList.add(styles[EMAIL_CLASSNAME]);
        el.classList.add(validationClass);

        el.innerHTML = this.markup();

        const emailEl: HTMLElement = el.querySelector(
            `.${styles[EMAIL_TEXT_CLASSNAME]}`,
        );
        emailEl.innerText = this.email;

        return el;
    }

    private isEmailValid(): boolean {
        const regexp = /\S+@\S+\.\S+/;

        return regexp.test(this.email.toLowerCase());
    }
}

export default EmailListItem;
