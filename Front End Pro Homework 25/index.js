// Используя цепочку Promise согласно таблицы http://prntscr.com/oxzs7j.

// Организовать вывод в консоль такой порядок цифр " 0 1 3 6 8 9 12 ", " 0 2 3 6 7 9 12". 
// Где 0 - это значение которое выводится в сallback - ф-ии которая передается в Promise.


const promise = new Promise((resolve, reject) => {
    const i = true;
    console.log(0);
    (i) ? resolve(i) : reject(i);
})

promise
    .then(
        (resolve) => {
            console.log(1);
            return resolve
        },
        (reject) => {
            console.log(2);
            return reject
        }
    )
    .then(
        (resolve) => {
            console.log(3);
            return Promise.reject(resolve)
        },
        (reject) => {
            console.log(4);
            return reject
        }
    )
    .then(
        (resolve) => {
            console.log(5);
            return resolve
        },
        (reject) => {
            console.log(6);
            if (reject) {
                return Promise.reject(reject)
            }
        }
    )
    .then(
        (resolve) => {
            console.log(7);
            return resolve
        },
        (reject) => {
            console.log(8);
            return reject
        }
    )
    .then(
        (resolve) => {
            console.log(9);
            return Promise.reject(resolve)
        },
        (reject) => {
            console.log(10);
            return reject
        }
    )
    .then(
        (resolve) => console.log(11),
        (resolve) => console.log(12)
    )