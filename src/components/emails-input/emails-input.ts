import IComponent from '../../types';
import EmailList from '../email-list';

const CONTAINER_CLASSNAME = 'emails-input';

class EmailsInput implements IComponent {
    private root: HTMLElement;
    private emailList: EmailList;
    private inputEl: HTMLInputElement;

    element: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;

        this.root.appendChild(this.render());
        this.subscribe();
    }

    private onContainerClick(e: MouseEvent): void {
        if (e.target === this.element) {
            this.inputEl.focus();
        }
    }

    private onKeyup(e: KeyboardEvent): void {
        if (e.key === ',') {
            const email = this.inputEl.value.slice(0, -1);
            this.addEmail(email);
        } else if (e.key === 'Enter') {
            this.addEmail(this.inputEl.value);
        }
    }

    private onBlur(): void {
        this.addEmail(this.inputEl.value);
    }

    private onPaste(): void {
        setTimeout(() => {
            this.addEmail(this.inputEl.value);
        });
    }

    getEmailsCount(): number {
        return this.emailList.getEmailsCount();
    }

    addEmail(value: string): void {
        if (!value) return;

        const emails = value.split(',');

        emails.forEach((email: string) => {
            this.emailList.addEmail(email.trim());
        });

        this.inputEl.value = '';
    }

    render(): HTMLElement {
        this.element = document.createElement('div');
        this.element.classList.add(CONTAINER_CLASSNAME);

        this.emailList = new EmailList();

        this.element.appendChild(this.emailList.element);

        this.inputEl = document.createElement('input');
        this.inputEl.classList.add('email-add-more');
        this.inputEl.setAttribute('type', 'email');
        this.inputEl.setAttribute('placeholder', 'add more people');

        this.element.appendChild(this.inputEl);

        return this.element;
    }

    subscribe(): void {
        this.inputEl.addEventListener('keyup', this.onKeyup.bind(this));
        this.inputEl.addEventListener('blur', this.onBlur.bind(this));
        this.inputEl.addEventListener('paste', this.onPaste.bind(this));

        this.element.addEventListener(
            'click',
            this.onContainerClick.bind(this),
        );
    }
}

export default EmailsInput;
