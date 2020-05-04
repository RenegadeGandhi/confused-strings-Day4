let a;
let b;

const uniformCase = (word) => {
    a = word.toUpperCase(); //converts string to uppercase and stores in a.
    b = word.toLowerCase(); //converts string to lowercase and stores in b.
    return `${a}, ${b}`;
}

uniformCase("HasTAlaViSta");