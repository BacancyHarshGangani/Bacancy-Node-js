// Task 1: Promise with conditional resolve/reject

function checkage(num)
{
    const res = new Promise((resolve, reject) =>{
        if(num >= 18)
        {
            resolve("Mature");
        }
        else{
            reject("Minor")
        }
    })
    return  res;
}

checkage(20)
  .then(result => console.log(result))
  .catch(error => console.error(error));

checkage(16)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Task 2: Promise chaining with transformation

const ans = Promise.resolve(3)
.then(num => num * num)
.then(num => num + 10);

ans.then(num => console.log(num));

// Task 3: Delayed Promise

const prr = new Promise((res, rej) => {
    setTimeout(() =>{
        res("Done");
    },1000);
})

prr.then(res => console.log(res));

// Task 4: Promise.all with mixed delays

function fun4 ()
{
    const pr1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success1");
        }, 1000); 
    })


    const pr2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success2");
        }, 2000); 
    })


    Promise.all([pr1, pr2]).then(res => console.log(res));
}
fun4();

// Task 5: Promise.finally usage

const fin = new Promise((res,rej) => {
    res("Done");
})

fin
    .then(function (res){
        console.log(res)
    })
    .catch(error =>
        console.log(error))
    .finally(()=> console.log("Completed"))
    