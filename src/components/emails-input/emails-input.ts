class EmailsInput {
    private root: HTMLElement;

    private containerEl: HTMLElement;

    private listEl: HTMLElement;

    private inputEl: any;

    private state: any;

    constructor(root: HTMLElement) {
        this.root = root;
        this.state = {
            emailList: [],
        };

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

    static emailMarkup(email: string) {
        return `
                <span class="email">${email}</span>
                <span class="icon-remove"></span>
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

    static isEmailValid(email: string): boolean {
        const regexp = /\S+@\S+\.\S+/;

        return regexp.test(email.toLowerCase());
    }

    addEmail(value: string) {
        if (!value) return;

        const el = document.createElement('span');

        const validationClass = EmailsInput.isEmailValid(value)
            ? 'valid'
            : 'invalid';
        el.classList.add('email-list-item');
        el.classList.add(validationClass);

        el.innerHTML = EmailsInput.emailMarkup(value);
        this.listEl.appendChild(el);
    }

    onContainerClick(e: Event) {
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

    onBlur(e: Event) {
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
