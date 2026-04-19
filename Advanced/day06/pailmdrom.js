let str = "MADAML";
let i = 0;
let j = str.length - 1;
while (i < str.length && j >= 0) {
    if (str[i] !== str[j]) {
        console.log("Not Palimdrom");
        return;

    }
    i++;
    j--;
}

console.log("Palimdrom");
