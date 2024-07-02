// VARIABLES //
const sortButton = document.getElementById("sort");

// FUNCTIONS//
const sortInputArray = (e) => {
    e.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value))
    updateUI(inputValues)
};

const updateUI = (array = []) => {
    array.forEach((num, i)=>{})
    const outputValueNode = document.getElementById(`output-value-${i}`)
    outputValueNode.innerText = num
}

// EVENT LISTENERS //
sortButton.addEventListener("click", sortInputArray);