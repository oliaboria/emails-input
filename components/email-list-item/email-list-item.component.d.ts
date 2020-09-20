import IComponent from '../../types';
declare class EmailListItem implements IComponent {
    private email;
    element: HTMLElement;
    constructor(email: string);
    private markup;
    render(): HTMLElement;
    private isEmailValid;
}
export default EmailListItem;
