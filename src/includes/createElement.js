// createElement.js

// Input parameters must be strings
export default function(_type, _content = "", _class = null, _id = null) {
    let domElem = null;
    try {
        domElem = document.createElement(_type);
    } catch (error) {
        throw new Error(`Something went wrong when creating element of type ${_type}`);
    }
    if (_class) {
        domElem.classList.add(_class);
    }
    if (_id) {
        domElem.id = _id;
    }
    if (_content) {
        domElem.textContent = _content;
    }
    if (!domElem) {
        throw new Error("Something went wrong, domElem is null");
    }
    return domElem;
}