function mergeTwoArray(arr1, arr2) {
  let emptyArr = []
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      emptyArr.push(arr1[i])
      i++;
    } else {
      emptyArr.push(arr2[j])
      j++;
    }

  }


  // remaining elements

  while (i < arr1.length) {
    emptyArr.push(arr1[i])
    i++;
  }

    while (j < arr2.length) {
      emptyArr.push(arr2[j]);
      j++;
    }


  return emptyArr;
}

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const result = mergeTwoArray(arr1, arr2);

console.log(result);

/*
  # Process to perform logic:-

  1. We are sorting two arrays so we give two parameters like arr1, arr2
  2. Declare an empty array so we can push the sorted value inside
  3. Now we declare two more variables so we can perform loop on this
  4. use while loop till arr1 & arr2 length
  5. now we use a condition and check if arr1[i] is less than or equal to arr2[j] :- If this condition match then it push the arr1 data
     into empty array and increase the i value
     :- If the condition not match then it push the arr2[j] into empty array and increase the value

  6. As of now all the elements are merged but if any of them remaining then we need to merge that element also.
  
  7. now we again check using while loop i < arr1.length => if yes then we push the arr1[i] into empty array and same with arr2[j]



  Ex=  

 arr1 = [1, 2, 5, 9]

 const arr2 = [4, 3, 8, 7]

 If this the array then when we use first while loop it works perfectly because both array have 4 elements inside the array 


 but If the number of data inside the array is different then we need to run another loop to merge remaining elements

 arr1 = [1, 2, 5, 9]

 const arr2 = [4, 3, 8, 7, 6, 11]



 */
