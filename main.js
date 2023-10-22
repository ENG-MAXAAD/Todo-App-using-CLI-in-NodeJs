
const fs = require('fs');
const readline = require('readline');

function add(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    }); 



const randomeId = Math.floor(Math.random()*1000)
// console.log('randomeId',randomeId);
  rl.question('Enter data to write file.' , (task)=>{

     if(fs.existsSync('todo.json')){
         fs.readFile('todo.json', 'utf8',(err , data) => {

        if(err){
            throw err
        }else{
            const jsonData =JSON.parse(data)
            jsonData.push({id : randomeId , task : task})
               fs.writeFile('todo.json',JSON.stringify(jsonData , null , 2), (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log( jsonData, 'Succesfuly Saved..');
                    rl.close();
                    // console.log(Succesfuly Saved..'');
                }
            })

        }

       })
     }else{
        console.log('File error');
     }

})

}





function display(){
    if(fs.existsSync('todo.json')){
        fs.readFile('todo.json', 'utf8', (err, data) =>{
            if(err) {
               console.log('error occur');
            }else{
                const jsonData = JSON.parse(data);
                console.log(jsonData);

            }
        } )
    }
}






function update() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    if (fs.existsSync('todo.json')) {
        fs.readFile('todo.json', 'utf8', (err, data) => {
            if (err) {
                throw err
            } else {

                const jsonData = JSON.parse(data);
                rl.question('Update id ', (id) => {

                    rl.question('Enter update task', (task) => {
                        const updateJsontask = jsonData.map((json) => {
                            if (json.id == Number(id)) {
                                return {
                                    ...json, task: task

                                }

                            }
                            return json
                        })

                        fs.writeFile('todo.json', JSON.stringify(updateJsontask, null, 2), (err) => {
                            if (err) {
                                throw err
                            } else {
                                console.log(updateJsontask, 'Data was updated');
                            }
                        })

                    })

                })



                // const updateJsonData = JSON.stringify(data, null, 2);


            }
        })
    } else {
        console.log('Not Found this file');
    }
}

function delete_todo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    if (fs.existsSync('todo.json')) {
        fs.readFile('todo.json', 'utf8', (err, data) => {
            if (err) {
                throw err
            } else {

                const jsonData = JSON.parse(data);
                rl.question('Update id ', (id) => {
                        const updateJsontask = jsonData.filter((json) => {
                            return json.id !== Number(id);
                        })

                        fs.writeFile('todo.json', JSON.stringify(updateJsontask, null, 2), (err) => {
                            if (err) {
                                throw err
                            } else {
                                console.log(updateJsontask, 'Data was deleted');
                            }
                        })

                    })

                



                // const updateJsonData = JSON.stringify(data, null, 2);


            }
        })
    } else {
        console.log('Not Found this file');
    }
}







module.exports ={
    add, display, update, delete_todo
}











//read file
// fs.readFile('todo.json',  (err, data)=>{
//     if(err) throw err
//     console.log("Reading data..")
//     console.log(data.toString())
// })

//delete files
// fs.unlink('todo.json', (err)=>{
//     if(err) throw err
//     console.log("deleted succesfuly..")
// })





