export function createElement(options){
    const { tag = "div", text = "", parent, classes = [] } = options;

    const element = document.createElement(tag);
    element.textContent = text;

  
    if (classes.length > 0) {
        element.classList.add(...classes);
    }

    if (parent != null) {
        parent.appendChild(element);
    }

    return element;
}