// var md5 = require('./node_modules/blueimp-md5')
//Задача № 1

function cachingDecoratorNew(func) {

    let cache = [];

    return (...args) => {
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу

        if (objectInCache) { // если элемент найден
            console.log("Из кеша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return `Из кеша: ${objectInCache.value}`;
        }
        const result = func(...args); // в кеше результата нет — придётся считать
        cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
            cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый)    
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    
}

// cache = [
//     { hash: "7f49b84d0bbc38e96493718013baace6", value: 60 },
//     { hash: "36d9d8df7a0a21c339bf74e2a30d68bd", value: 6 },
//     { hash: "fd526d0a3bfd3ebdc1fc0f998d241da6", value: 791 },
// ];


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


let add2 = (a, b) => a + b;
    let multiply3 = (a, b, c) => a * b * c;
    let upgAdd2;
    let upgMultiply3;



    upgAdd2 = cachingDecoratorNew(add2);
    upgMultiply3 = cachingDecoratorNew(multiply3);

    expect(upgAdd2(1, 2)).toEqual("Вычисляем: 3");
    expect(upgAdd2(1, 2)).toEqual("Из кеша: 3");
    expect(upgAdd2(1, 2)).toEqual("Из кеша: 3");

//Задача № 2
function debounceDecoratorNew(func, delay) {

}


