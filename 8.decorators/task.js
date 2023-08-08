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

//Задача № 2
function debounceDecoratorNew(func, delay) {

    let timeoutId;
    let count = 0; // количество апли / количество вызовов декорированной функции
    let allCount = 0; // количество всех оберток / количество вызовов декоратора
    wrapper.allCount = allCount;
    wrapper.count = count;

    function wrapper(...args) {
        allCount++;
        if (timeoutId) {
            console.log("удалили текущий таймаут");
            clearTimeout(timeoutId);
        }
        if (!timeoutId) {
            func.apply(this, args);
            count++;
            wrapper.count = count;
        }

        console.log("создаем новый таймаут");
        timeoutId = setTimeout(() => {
            count++;
            func.apply(this, args);
            console.log("вызвали колбек");
            wrapper.count = count;
        }, delay);
        wrapper.allCount = allCount;
    }

    return wrapper;
}