import EmailList from '../email-list';

const CONTAINER_CLASSNAME = 'emails-input';

class EmailsInput {
    private root: HTMLElement;
    private containerEl: HTMLElement;
    private emailList: EmailList;
    private inputEl: any;

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
    }

    onContainerClick(e: MouseEvent) {
        if (e.target === this.containerEl) {
            this.inputEl.focus();
        }
    }

    onKeydown(e: KeyboardEvent) {
        if (e.key === ',') {
            const email = this.inputEl.value.slice(0, -1);
            this.addEmail(email);
            this.inputEl.value = '';
        } else if (e.key === 'Enter') {
            this.addEmail(this.inputEl.value);
            this.inputEl.value = '';
        }
    }

    onBlur(e: FocusEvent) {
        this.addEmail(this.inputEl.value);
        this.inputEl.value = '';
    }

    subscribe() {
        this.inputEl.addEventListener('keyup', this.onKeydown.bind(this));
        this.inputEl.addEventListener('blur', this.onBlur.bind(this));

        this.containerEl.addEventListener(
            'click',
            this.onContainerClick.bind(this),
        );
    }
}

export default EmailsInput;
