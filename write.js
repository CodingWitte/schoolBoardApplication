const fs = require('fs');
const path = require('path');
let i = 0;
let directory;
function writeHTML (html){
    if(i=== 0){
        const input = document.createElement('input');
        input.type = 'file';
        input.nwsaveas = 'output.html';
        input.click();

        input.addEventListener('change', () => {
            const filePath = input.value;
            directory = input.value;
            fs.writeFileSync(filePath, html);
        });
        i++;
    }
    fs.writeFileSync(directory, html);
    console.log('overwritten html succsesfull');
}

