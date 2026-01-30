// Task 1: Async function returning value

async function res(num) {
    return num;
}

async function getnumber() {
    const num = await res(10);
    console.log(num);
}

getnumber();

// Task 2: Await with delay

async function delay() {
    setTimeout(() => {
        console.log("Hello");
    }, 1000);
}

delay();

// Task 3: Error handling with try/catch

async function getnumber1() {
    try {
        const num = await res(fytf);
        console.log(num);
    } catch (error) {
        console.log("error");
    }
}

getnumber1();

// Task 4: Sequential async calls

const first = async () => {
  return "First done";
};

const second = async () => {
  return "Second done";
};

const runSequential = async () => {
  const res1 = await first();
  console.log(res1);

  const res2 = await second();
  console.log(res2);
};

runSequential();

// Task 5: Parallel execution

const f1 = async () => {
  return "fun1";
};

const f2 = async () => {
  return "fun2";
};

const runParallel = async () => {
  const [res1, res2] = await Promise.all([
    f1(),
    f2()
  ]);

  console.log(res1);
  console.log(res2);
};

runParallel();
