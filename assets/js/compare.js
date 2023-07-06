// Check for session storage
if (!window.sessionStorage) {
    console.error("Session Storage is unsupported!");
} else {
    // Update warning messages if need be
    document.getElementById("no-storage").classList.add("hidden");
    const compareTools = JSON.parse(sessionStorage.getItem("compareTools"));
    if (!compareTools || compareTools.length < 2) {
        if (compareTools.length === 0) {
            document.getElementById("no-tools").classList.remove("hidden");
        } else {
            document.getElementById("one-tool").classList.remove("hidden");
        }
    } else {
        // Show the first two tools in the array
        document.getElementById("tool1-" + compareTools[0]).classList.remove("hidden");
        document.getElementById("tool2-" + compareTools[1]).classList.remove("hidden");
    }
}


