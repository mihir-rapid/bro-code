    // function => arr, delete, replace

    function modifyArr(originalArr, deleteElement, replaceElement) {

        console.log("original array:", originalArr);

        if (originalArr.includes(deleteElement)) {

            // delete
            const deleteArr = [...originalArr];
            const index = deleteArr.indexOf(deleteElement);

            deleteArr.splice(index, 1);

            console.log(`deleteArray:`, deleteArr);
            console.log("original array:", originalArr);

            // replace
            const replaceArr = [...deleteArr];

            replaceArr.splice(index, "", replaceElement)


            console.log(`replaceArray:`, replaceArr);
            console.log("original array:", originalArr);

            console.log(originalArr == deleteArr == replaceArr);

        } else {

            console.log(`${deleteElement} is not in array!`);

        }
    }

    let arr = ["mihir", "kuldeep", "krish"]
    let deleteElement = prompt("delete name")
    let replaceElement = prompt("replace name with delete element")

    modifyArr(arr, deleteElement, replaceElement)

