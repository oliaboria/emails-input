import EmailListItem from '../email-list-item';

class EmailsInput {
    private root: HTMLElement;
    private containerEl: HTMLElement;
    private listEl: HTMLElement;
    private inputEl: any;
    private state: any;

    constructor(root: HTMLElement) {
        this.root = root;

        this.render();
        this.queryElements();
        this.subscribe();
    }

    static markup() {
        return `
            <div class="emails-input">
                <span class="email-list"></span>
                <input class="email-add-more" type="email" placeholder="add more people" />
            <div>
        `;
    }

    render() {
        this.root.innerHTML = EmailsInput.markup();
    }

    queryElements() {
        this.containerEl = this.root.querySelector('.emails-input');
        this.listEl = this.root.querySelector('.email-list');
        this.inputEl = this.root.querySelector('.email-add-more');
    }

    addEmail(value: string): void {
        if (!value) return;

        const emailEl = new EmailListItem(value).element;

        this.listEl.appendChild(emailEl);
    }

    onContainerClick(e: MouseEvent) {
        if (e.target === this.containerEl) {
            this.inputEl.focus();
        }
    }

    removeEmail(e: MouseEvent) {
        const target = e.target as Element;

        if (target.classList.contains('icon-remove')) {
            this.listEl.removeChild(target.parentNode);
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

        this.listEl.addEventListener('click', this.removeEmail.bind(this));
    }
}

export default EmailsInput;
