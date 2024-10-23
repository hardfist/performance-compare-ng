const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const functionCode = fs.readFileSync('./react.js','utf-8')
function addFunctionToFile(filePath) {

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        const updatedData = data + functionCode;
        fs.writeFileSync(filePath, updatedData, 'utf8');
        console.log(`Function added to ${filePath}`);
    } catch (err) {
        console.error(`Error processing file ${filePath}:`, err);
    }
}

try {
    const files = fs.readdirSync(srcDir);
    files.forEach(file => {
        const filePath = path.join(srcDir, file);
        if (fs.lstatSync(filePath).isFile()) {
            addFunctionToFile(filePath);
        }
    });
} catch (err) {
    console.error('Error reading src directory:', err);
}