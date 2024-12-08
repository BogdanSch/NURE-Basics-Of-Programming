function reverseArray<T>(arr: Array<T>) {
  let countElements = arr.length;

  for (let i = 0; i < countElements / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[countElements - i - 1];
    arr[countElements - i - 1] = temp;
  }
}

const arr = [1, 2, 3, 4, 5, 6];
reverseArray(arr);

console.log(arr);
