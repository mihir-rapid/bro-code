function modifyArr(originalArr, deleteElement, replaceElement) {
    console.log("originalArr:", originalArr);

    if (originalArr.includes(deleteElement)) {

        // delete
        let delArr = [...originalArr]; // spread()
        // let delArr = originalArr.map(element => element)    // map()
        // let delArr = originalArr.slice();    // slice()

        let index = delArr.indexOf(deleteElement);

        delArr.splice(index, 1);

        console.log("deletedArr:", delArr);
        console.log("originalArr:", originalArr);

        // replace
        let repArr = [...delArr];  // spread()
        // let repArr = delArr.map(element => element)
        // let repArr = delArr.slice();     // slice()

        repArr.splice(index, "", replaceElement);

        console.log("replacedArr:", repArr);
        console.log("originalArr:", originalArr);

    } else {

        console.log(`${deleteElement} is not in the array!`);

    }
}

let arr = ["mihir", "mouse", "jack"]
modifyArr(arr, "jack", "water-bottle")
