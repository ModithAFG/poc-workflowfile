const fs = require("fs-extra");
try {
    fs.ensureDir("testResults");
    fs.emptyDir("testResults");

} catch (error) {
    console.log("Folder not created! " + error);
}