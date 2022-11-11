function insertionSort(items) {
    for (let i = 1; i < items.length; i++) {
        let element = items[i];
        let j = i-1;
        console.log(element,j, items[j+1])

        while (j>=0 && items[j]> element) {
            items[j+1] = items[j]
            j--;
        }
        items[j+1] = element
    }
    console.log(items)
}
const list = [54, 26, 93, 17, 77, 31, 44, 55, 20];
console.log(insertionSort(list)); // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]
