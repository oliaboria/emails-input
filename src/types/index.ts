interface IComponent {
    element: HTMLElement;

    render: () => HTMLElement;
    subscribe?: () => void;
}

export default IComponent;
