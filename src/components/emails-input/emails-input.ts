import EmailList from '../email-list';

const CONTAINER_CLASSNAME = 'emails-input';

class EmailsInput {
    private root: HTMLElement;
    private containerEl: HTMLElement;
    private emailList: EmailList;
    private inputEl: HTMLInputElement;

    constructor(root: HTMLElement) {
        this.root = root;

        this.root.appendChild(this.render());
        this.subscribe();
    }

    render(): HTMLElement {
        this.containerEl = document.createElement('div');
        this.containerEl.classList.add(CONTAINER_CLASSNAME);

        this.emailList = new EmailList();

        this.containerEl.appendChild(this.emailList.element);

        this.inputEl = document.createElement('input');
        this.inputEl.classList.add('email-add-more');
        this.inputEl.setAttribute('type', 'email');
        this.inputEl.setAttribute('placeholder', 'add more people');

        this.containerEl.appendChild(this.inputEl);

        return this.containerEl;
    }

    addEmail(value: string): void {
        if (!value) return;

        this.emailList.addEmail(value);
        this.inputEl.value = '';
    }

    getEmailsCount(): number {
        return this.emailList.getEmailsCount();
    }

    private onContainerClick(e: MouseEvent): void {
        if (e.target === this.containerEl) {
            this.inputEl.focus();
        }
    }

    private onKeydown(e: KeyboardEvent): void {
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

    private subscribe(): void {
        this.inputEl.addEventListener('keyup', this.onKeydown.bind(this));
        this.inputEl.addEventListener('blur', this.onBlur.bind(this));

        this.containerEl.addEventListener(
            'click',
            this.onContainerClick.bind(this),
        );
    }
}

export default EmailsInput;
