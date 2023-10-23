export function myMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
    return result;
  }

export function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
        return array[i];
        }
    }
    return undefined;
}

export function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
        result.push(array[i]);
        }
    }
    return result;
}

export function myReduce(array, callback) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i]);
    }
    return result;
}

