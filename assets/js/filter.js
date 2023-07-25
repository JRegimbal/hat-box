let arrayChecked, selStartYear, selEndYear = null;

const store = Boolean(window.sessionStorage);

if (store) {
    // Try to retrieve last filter settings from storage
    arrayChecked = sessionStorage.getItem("checkedInputs");
    if (arrayChecked) {
        arrayChecked = JSON.parse(arrayChecked);
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

    // Platform (AND)
    const plsFilter = [];
    const plInputs = Array.from(document.getElementsByClassName("filter-input-pl"));
    for (const input of plInputs) {
        if (input.checked) {
            plsFilter.push(input.value);
        }
    }
    if (plsFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = false;
            for (const filter of plsFilter) {
                if (!tool.classList.contains(filter)) {
                    hide = true;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Availability (OR)
    const avsFilter = [];
    const avInputs = Array.from(document.getElementsByClassName("filter-input-av"));
    for (const input of avInputs) {
        if (input.checked) {
            avsFilter.push(input.value);
        }
    }
    if (avsFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of avsFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // License (OR)
    const licFilter = []
    const liInputs = Array.from(document.getElementsByClassName("filter-input-li"));
    for (const input of liInputs) {
        if (input.checked) {
            licFilter.push(input.value);
        }
    }
    if (licFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of licFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Haptic Categories (OR)
    const hcsFilter = [];
    const hcInputs = Array.from(document.getElementsByClassName("filter-input-hc"));
    for (const input of hcInputs) {
        if (input.checked) {
            hcsFilter.push(input.value);
        }
    }
    if (hcsFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of hcsFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Hardware Abstraction (OR)
    const hasFilter = [];
    const haInputs = Array.from(document.getElementsByClassName("filter-input-ha"));
    for (const input of haInputs) {
        if (input.checked) {
            hasFilter.push(input.value);
        }
    }
    if (hasFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of hasFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Driving Feature (AND)
    const dfsFilter = [];
    const dfInputs = Array.from(document.getElementsByClassName("filter-input-df"));
    for (const input of dfInputs) {
        if (input.checked) {
            dfsFilter.push(input.value);
        }
    }
    if (dfsFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = false;
            for (const filter of dfsFilter) {
                if (!tool.classList.contains(filter)) {
                    hide = true;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Effect Localization (OR)
    const elsFilter = [];
    const elInputs = Array.from(document.getElementsByClassName("filter-input-el"));
    for (const input of elInputs) {
        if (input.checked) {
            elsFilter.push(input.value);
        }
    }
    if (elsFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of elsFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Media Support (OR)
    const mssFilter = [];
    const msInputs = Array.from(document.getElementsByClassName("filter-input-ms"));
    for (const input of msInputs) {
        if (input.checked) {
            mssFilter.push(input.value);
        }
    }
    if (mssFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of mssFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Iterative Playback (OR)
    const ipsFilter = [];
    const ipInputs = Array.from(document.getElementsByClassName("filter-input-ip"));
    for (const input of ipInputs) {
        if (input.checked) {
            ipsFilter.push(input.value);
        }
    }
    if (ipsFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of ipsFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Design Approaches (OR)
    const dasFilter = [];
    const daInputs = Array.from(document.getElementsByClassName("filter-input-da"));
    for (const input of daInputs) {
        if (input.checked) {
            dasFilter.push(input.value);
        }
    }
    if (dasFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of dasFilter) {
                if (tool.classList.contains(filter)) {
                    hide = false;
                    break;
                }
            }
            if (hide) {
                tool.classList.add("hidden");
            }
        }
    }

    // Interaction Metaphors (OR)
    const imsFilter = [];
    const imInputs = Array.from(document.getElementsByClassName("filter-input-im"));
    for (const input of imInputs) {
        if (input.checked) {
            imsFilter.push(input.value);
        }
    }
    if (imsFilter.length !== 0) {
        for (const tool of tools) {
            if (tool.classList.contains("hidden")) continue;
            let hide = true;
            for (const filter of imsFilter) {
                if (tool.classList.contains(filter)) {
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

Array.from(document.getElementsByClassName("filter-input")).forEach(input => { input.addEventListener("change", (evt) => {
            if (input.id === "start-year") {
                selStartYear = input.value;
                sessionStorage.setItem("selStartYear", selStartYear);
            } else if (input.id === "end-year") {
                selEndYear = input.value;
                sessionStorage.setItem("selEndYear", selEndYear);
            } else {
                if (input.checked) {
                    if (!arrayChecked) {
                        arrayChecked = [];
                    }
                    arrayChecked.push(input.id);
                    sessionStorage.setItem("checkedInputs", JSON.stringify(arrayChecked));
                } else {
                    if (arrayChecked) {
                        arrayChecked.splice(arrayChecked.indexOf(input.id), 1);
                        sessionStorage.setItem("checkedInputs", JSON.stringify(arrayChecked));
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
        }
    });
    if (store) {
        arrayChecked = null;
        selStartYear = null;
        selEndYear = null;
        sessionStorage.removeItem("checkedInputs");
        sessionStorage.removeItem("selStartYear");
        sessionStorage.removeItem("selEndYear");
    }
    updateToolFilter();
});
// Apply filters with stored values (if any)
updateToolFilter();
