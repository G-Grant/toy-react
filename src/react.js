function createElement(type, config, ...children) {
    return { tag: type, attrs: config, children };
}

export default {
    createElement,
};
