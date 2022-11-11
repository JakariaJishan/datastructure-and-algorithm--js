let arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
let target = 11;

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return console.log(mid);
    }
    if (target > arr[mid]) {
      start = mid + 1;
    }
    if (target < arr[mid]) {
      end = mid - 1;
    }
    
  }
  console.log("invalid");
};

binarySearch(arr, target);
