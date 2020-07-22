function createElement(type, config, ...children) {
    if (typeof type === 'function') {
        type = new type();
    }
    return { type, config, children };
}

export default {
    createElement,
};
