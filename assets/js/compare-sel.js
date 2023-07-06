if (window.sessionStorage) {
    const compareReset = document.getElementById("compare-reset");
    const compareInputs = Array.from(document.getElementsByClassName("compare"));
    let compareArray = JSON.parse(sessionStorage.getItem("compareTools"));

    compareReset.addEventListener("click", () => {
        compareInputs.forEach(input => {
            input.disabled = false;
            input.checked = false;
        });
        compareArray = [];
        sessionStorage.removeItem("compareTools");
    });

    if (!compareArray) {
        compareArray = [];
    }

    // Init check boxes
    for (const tool of compareArray) {
        const elem = document.querySelector("#tool-" + tool + " .compare");
        if (elem) {
            elem.checked = true;
        } else {
            console.warn("Could not find comparison input descendant of element with ID " + tool);
        }
    }

    if (compareArray.length >= 2) {
        compareInputs.forEach(item => {
            item.disabled = !item.checked;
        });
    }

    // Apply listeners to check boxes
    compareInputs.forEach(item => {
        item.addEventListener("change", (evt) => {
            if (item.checked) {
                compareArray.push(item.name);
                console.log(compareArray);
                if (compareArray.length >= 2) {
                    compareInputs.forEach(checkbox => {
                        checkbox.disabled = !checkbox.checked;
                    });
                }
            } else {
                console.log(compareArray);
                console.log(compareArray.indexOf(item.name));
                compareArray.splice(compareArray.indexOf(item.name), 1);
                if (compareArray.length < 2) {
                    compareInputs.forEach(checkbox => {
                        checkbox.disabled = false;
                    });
                }
            }
            sessionStorage.setItem("compareTools", JSON.stringify(compareArray));
        });
    });
} else {
    console.warn("No session storage available - comparison logic is useless.");
}
