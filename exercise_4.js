let fs = require('fs');

let data_lines;
let data_type;

const get_init_line = (file_name, line_no, stackTrace) => {
    data_type = fs.readFileSync(filename, 'utf8');
    data_lines = data_type.split("\n");
    if (+line > data_lines.length) {
        console.log('completed reading file but line not found');
    }
    stackTraceer(null, data_lines[+line]);
}

get_init_line('./helloworld.txt', 9, (err, line) => {
    console.log('data in line 10 is: ' + line);
});
