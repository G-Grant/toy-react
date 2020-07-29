function render(vdom, container) {
    // 当 vdom 是字符串时，直接创建文本节点
    if (typeof vdom === 'string') {
        const dom = document.createTextNode(vdom);
        return container.appendChild(dom);
    }
    const dom = document.createElement(vdom.tag);
    for (const name in vdom.attrs) {
        // 未考虑处理 className
        setAttribute(dom, name, vdom.attrs[name]);
    }
    // 递归渲染子节点
    vdom.children.forEach((child) => render(child, dom));
    return container.appendChild(dom);
}

function setAttribute(dom, attr, value) {
    // 处理 className
    if (attr === 'className') attr = 'calss';
    if (/^on\w+$/.test(attr)) {
        // 处理事件绑定
        attr = attr.toLowerCase();
        dom[attr] = value;
    } else if (attr === 'style') {
        // 处理样式
        const style = value;
        Object.keys(style).forEach((property) => {
            const propertyValue = style[property];
            dom.style[property] = typeof propertyValue === 'number' ? propertyValue + 'px' : propertyValue;
        });
    } else {
        if (value) {
            // 此处需理解 dom 上的 property 和 html 上 attribute
            dom.setAttribute(attr, value);
        } else {
            dom.removeAttribute(attr);
        }
    }
}

export default {
    render,
};
