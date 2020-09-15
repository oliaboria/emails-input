class EmailsInput {
    private container: HTMLElement;

    constructor(container: HTMLElement) {
        this.container = container;

        this.render();
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
        this.container.innerHTML = EmailsInput.markup();
    }
}

export default EmailsInput;
