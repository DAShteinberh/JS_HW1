function isVariableNaN(value) {
    return +value != value;
}
isVariableNaN(Infinity/Infinity);
