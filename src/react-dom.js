function render(vdom, container) {
    // 当 vdom 是字符串时，直接创建文本节点
    if (typeof vdom === 'string') {
        const dom = document.createTextNode(vdom);
        return container.appendChild(dom);
    }
    const dom = document.createElement(vdom.tag);
    for (const name in vdom.attrs) {
        // 未考虑处理 className
        dom.setAttribute(name, vdom.attrs[name]);
    }
    // 递归渲染子节点
    vdom.children.forEach((child) => render(child, dom));
    return container.appendChild(dom);
}

export default {
    render,
};
