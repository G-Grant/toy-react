function render(vdom, root) {
    if (typeof vdom === 'string') {
        const dom = document.createTextNode(vdom);
        return root.appendChild(dom);
    }
    const dom = document.createElement(vdom.type);
    for (const name in vdom.config) {
        dom.setAttribute(name, vdom.config[name]);
    }
    // 遍历 children，并渲染
    vdom.children.forEach((child) => render(child, dom));
    root.appendChild(dom);
}

export default {
    render,
};
