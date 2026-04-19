//  Write a program to destructure nested arrays and print individual values.

let arr = [
    1, 2, 3, [4, 5, 6], 9, 10, [11, 12, 19]
]

const print = (arr) => {
    for (let a of arr) {

        if (Array.isArray(a)) {
            print(a)

        }
        else {
            console.log(a);
        }

    }
}

print(arr)