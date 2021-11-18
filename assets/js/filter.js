function updateToolFilter(evt) {
    // Set all to visible at first
    const tools = Array.from(document.getElementsByClassName("tools-top-div"));
    tools.forEach(tool => { tool.classList.remove("hidden"); });
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

Array.from(document.getElementsByClassName("filter-input")).forEach(input => { input.addEventListener("change", updateToolFilter); });

