
const readline = require('readline');
const { add, display, update, delete_todo } = require('./main');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Choose operation(add/update/display/delete)', (action) => {
    switch (action) {
        case 'add':
            add();
            break;
        case 'display':
            display();
            break;
        case 'update':
            update();
            break;
            case 'delete':
              delete_todo();  
              break;
        default:
            console.log('Invalid input');
            break;
    }

});

// display();



// add();  