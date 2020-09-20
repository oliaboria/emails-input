import IComponent from '../../types';
declare class EmailsInput implements IComponent {
    private root;
    private emailList;
    private inputEl;
    element: HTMLElement;
    constructor(root: HTMLElement);
    private onContainerClick;
    private onKeyup;
    private onBlur;
    private onPaste;
    getEmailsCount(): number;
    addEmail(value: string): void;
    render(): HTMLElement;
    subscribe(): void;
}
export default EmailsInput;
