const readline = require('readline');
const fileSave = require('fs');
count = 0;

console.log("Create Interface");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
   });

questionsArr = ['First Name: ','Last Name: ', 'Age: ','Birthday: ','Hobby: '];
arr = [];

console.log(process.argv);

process.argv.forEach(function (val, index, array) {
 console.log(index + ': ' + val);
});

if(process.argv[2] === 'init')
{
    grabNums();
}

function grabNums() {
    rl.question(questionsArr[questionsArr.length-1], (answer) => {
        arr.push(answer);
        questionsArr.pop();
        if(questionsArr.length > 0)
        {
            grabNums();
        }
        else
        {
            rl.close();
            newJSON = {
                    "first_name" : arr[4],
                    "last_name" : arr[3],
                    "age" : arr[2],
                    "birthday" : arr[1],
                    "hobby" : arr[0]
                }
            textJSON = JSON.stringify(newJSON);
            console.log('JSON is parsed');
            fileSave.writeFile('package.json',textJSON,function(err){
                if(err) {
                    console.log('This is your Error');
                    console.log(err);
                }
            });
        }
    });
}
