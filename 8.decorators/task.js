var md5 = require('./node_modules/blueimp-md5')
//Задача № 1
function cachingDecoratorNew(func) {

    let cache = {};
    return (...args) => {
        const hash = md5(...args);
        if (hash in cache) {
            console.log("Из кеша: " + cache[hash]);
            return `Из кеша: ${cache[hash]}`;
        }
        const result = func(...args);
        cache[hash] = result;

        console.log("Вычисляем: " + result);
        return `Вычисляем: ${result}`;

        
        
    }
}

const addAndMultiply = (a, b, c) => (a + b) * c;
const upgraded = cachingDecoratorNew(addAndMultiply);
upgraded(1, 2, 3); // вычисляем: 9
upgraded(1, 2, 3); // из кеша: 9
upgraded(2, 2, 3); // вычисляем: 12
upgraded(3, 2, 3); // вычисляем: 15
upgraded(4, 2, 3); // вычисляем: 18
upgraded(5, 2, 3); // вычисляем: 21
upgraded(6, 2, 3); // вычисляем: 24 (при этом кеш для 1, 2, 3 уничтожается)
upgraded(1, 2, 3); // вычисляем: 9  (снова вычисляем, кеша нет)

//Задача № 2
function debounceDecoratorNew(func, delay) {

}


