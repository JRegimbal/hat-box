let arrayChecked, arraySelected, selStartYear, selEndYear = null;

const store = Boolean(window.sessionStorage);

if (store) {
    // Try to retrieve last filter settings from storage
    arrayChecked = sessionStorage.getItem("checkedInputs");
    if (arrayChecked) {
        arrayChecked = JSON.parse(arrayChecked);
    }
    arraySelected = sessionStorage.getItem("selectedInputs");
    if (arraySelected) {
        arraySelected = JSON.parse(arraySelected);
    }
    selStartYear = sessionStorage.getItem("selStartYear");
    selEndYear = sessionStorage.getItem("selEndYear");

    // Apply filter settings from storage
    if (selStartYear) {
        document.getElementById("start-year").value = parseInt(selStartYear);
    }
    if (selEndYear) {
        document.getElementById("end-year").value = parseInt(selEndYear);
    }
    if (arrayChecked) {
        for (const inputId of arrayChecked) {
            document.getElementById(inputId).checked = true;
        }
    }
    if (arraySelected) {
        for (const optId of arraySelected) {
            document.getElementById(optId).selected = true;
        }
    }
} else {
    console.warn("Session Storage API is not supported! Filter settings will not be preserved.");
}

function updateToolFilter() {
    // Set all to visible at first
    const tools = Array.from(document.getElementsByClassName("tools-top-div"));
    tools.forEach(tool => { tool.classList.remove("hidden"); });
    // Year (Range)
    const startYear = document.getElementById("start-year").value;
    const endYear = document.getElementById("end-year").value;
    for (const tool of tools) {
        if (tool.classList.contains("hidden")) continue;
        try {
            const year = Number(Array.from(tool.classList).find(el => el.startsWith("year:")).split(":")[1]);
            if (year < startYear || year > endYear) {
                tool.classList.add("hidden");
            }
        } catch (e) {
            console.error(e);
        }
    }

    // Filtering where tools much match ALL selected criteria
    const andClass = [
        "filter-input-pl",
        "filer-input-df",
    ];
    // Filtering where tools must match ANY selected criteria
    const orClass = [
        "filter-input-av",
        "filter-input-li",
        "filter-input-ve",
        "filter-input-uc",
        "filter-input-hc",
        "filter-input-ha",
        "filter-input-dn",
        "filter-input-bp",
        "filter-input-el",
        "filter-input-ms",
        "filter-input-ip",
        "filter-input-da",
        "filter-input-im",
        "filter-input-st",
        "filter-input-co"
    ];

    for (const cls of andClass) {
        const filterInputs = [];
        const inputs = Array.from(document.getElementsByClassName(cls));
        for (const input of inputs) {
            if (input.checked || input.selected) {
                filterInputs.push(input.value);
            }
        }
        if (filterInputs.length !== 0) {
            for (const tool of tools) {
                if (tool.classList.contains("hidden")) continue;
                let hide = false;
                for (const flt of filterInputs) {
                    if (!tool.classList.contains(flt)) {
                        hide = true;
                        break;
                    }
                }
                if (hide) {
                    tool.classList.add("hidden");
                }
            }
        }
    }

    for (const cls of orClass) {
        const filterInputs = [];
        const inputs = Array.from(document.getElementsByClassName(cls));
        for (const input of inputs) {
            if (input.checked || input.selected) {
                filterInputs.push(input.value);
            }
        }
        if (filterInputs.length !== 0) {
            for (const tool of tools) {
                if (tool.classList.contains("hidden")) continue;
                let hide = true;
                for (const flt of filterInputs) {
                    if (tool.classList.contains(flt)) {
                        hide = false;
                        break;
                    }
                }
                if (hide) {
                    tool.classList.add("hidden");
                }
            }
        }
    }
}

Array.from(document.getElementsByClassName("filter-input")).forEach(input => { input.addEventListener("change", (evt) => {
            if (input.id === "start-year") {
                selStartYear = input.value;
                sessionStorage.setItem("selStartYear", selStartYear);
            } else if (input.id === "end-year") {
                selEndYear = input.value;
                sessionStorage.setItem("selEndYear", selEndYear);
            } else if (input.nodeName === "SELECT") {
                const options = input.getElementsByTagName("option");
                for (const opt of options) {
                    console.log(opt)
                    if (opt.selected) {
                        console.log("Selected!")
                        if (!arraySelected) {
                            arraySelected = [];
                        }
                        arraySelected.push(opt.id);
                        sessionStorage.setItem("selectedInputs", JSON.stringify(arraySelected));
                    } else {
                        if (arraySelected) {
                            if (arraySelected.indexOf(opt.id) >= 0) {
                                arraySelected.splice(arraySelected.indexOf(opt.id), 1);
                                sessionStorage.setItem("selectedInputs", JSON.stringify(arraySelected));
                            }
                        } else {
                            console.warn("arraySelected was empty when removing input of ID " + input.id);
                        }
                    }
                    console.log(arraySelected);
                }
            } else {
                if (input.checked) {
                    if (!arrayChecked) {
                        arrayChecked = [];
                    }
                    arrayChecked.push(input.id);
                    sessionStorage.setItem("checkedInputs", JSON.stringify(arrayChecked));
                } else {
                    if (arrayChecked) {
                        if (arrayChecked.indexOf(input.id) >= 0) {
                            arrayChecked.splice(arrayChecked.indexOf(input.id), 1);
                            sessionStorage.setItem("checkedInputs", JSON.stringify(arrayChecked));
                        }
                    } else {
                        console.warn("arrayChecked was empty when removing input of ID " + input.id);
                    }
                }
            }
            updateToolFilter();
        }
    );
});
document.getElementById("resetFilters").addEventListener("click", () => {
    Array.from(document.getElementsByClassName("filter-input")).forEach(input => {
        if (input.type === "checkbox") {
            input.checked = input.defaultChecked;
        } else if (input.type === "number") {
            input.value = input.defaultValue;
        } else if (input.nodeName === "SELECT") {
            Array.from(input.getElementsByTagName("option")).forEach(
                opt => opt.selected = opt.defaultSelected
            );
        }
    });
    if (store) {
        arrayChecked = null;
        arraySelected = null;
        selStartYear = null;
        selEndYear = null;
        sessionStorage.removeItem("checkedInputs");
        sessionStorage.removeItem("selStartYear");
        sessionStorage.removeItem("selEndYear");
        sessionStorage.removeItem("selectedInputs");
    }
    updateToolFilter();
});
// Apply filters with stored values (if any)
updateToolFilter();
