// VARIABLES //
const sortButton = document.getElementById("sort");

// first: "bubble sort" algorithm
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length - 1; j++){
            // console.log(array, array[j], array[j + 1])
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
};

// second: selection sort algorithm
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++){
        let minIndex = i
        for (let j = i + 1; j < array.length; j++){
            // console.log("array:", array, "array[j]:", array[j], "array[minIndex]:", array[minIndex])
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        };
        const temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    };
    return array
};


// FUNCTIONS//
const sortInputArray = (e) => {
    e.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value))
    // const sortedValues = bubbleSort(inputValues)
    const sortedValues = selectionSort(inputValues)
    updateUI(sortedValues)
};

const updateUI = (array = []) => {
    array.forEach((num, i)=>{})
    const outputValueNode = document.getElementById(`output-value-${i}`)
    outputValueNode.innerText = num
}

// EVENT LISTENERS //
sortButton.addEventListener("click", sortInputArray);