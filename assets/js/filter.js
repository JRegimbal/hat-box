function updateToolFilter(evt) {
    // Set all to visible at first
    const tools = Array.from(document.getElementsByClassName("tools-top-div"));
    tools.forEach(tool => { tool.classList.remove("hidden"); });
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
}

Array.from(document.getElementsByClassName("filter-input")).forEach(input => { input.addEventListener("change", updateToolFilter); });

