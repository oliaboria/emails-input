import IComponent from '../../types';
declare class EmailList implements IComponent {
    element: HTMLElement;
    constructor();
    private removeEmail;
    render(): HTMLElement;
    addEmail(value: string): void;
    getEmailsCount(): number;
    subscribe(): void;
}
export default EmailList;
