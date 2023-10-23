export function zero(callback) {
    return callback ? callback(0) : 0;
}

export function one(callback) {
    return callback ? callback(1) : 1;
}

export function two(callback) {
    return callback ? callback(2) : 2;
}

export function three(callback) {
    return callback ? callback(3) : 3;
}

export function four(callback) {
    return callback ? callback(4) : 4;
}

export function five(callback) {
    return callback ? callback(5) : 5;
}

export function six(callback) {
    return callback ? callback(6) : 6;
}

export function seven(callback) {
    return callback ? callback(7) : 7;
}

export function eight(callback) {
    return callback ? callback(8) : 8;
}

export function nine(callback) {
    return callback ? callback(9) : 9;
}

export function plus(b) {
    return function(a) {
        return a + b;
    };
}

export function minus(b) {
    return function(a) {
        return a - b;
    };
}

export function times(b) {
    return function(a) {
        return a * b;
    };
}

export function dividedBy(b) {
    return function(a) {
        return Math.floor(a / b);
    };
}
  