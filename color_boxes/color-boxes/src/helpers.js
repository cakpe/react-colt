
function choice(arr) {
    let RandomIndex = Math.floor(Math.random() * arr.length);
    return arr[RandomIndex];
}

export { choice }