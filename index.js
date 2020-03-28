//-------------------------------- 1 -------------------------------------
const getZero = (num) => {
    if (num >= 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    }
};

const formatDate = (date  = new Date()) => {
    return `${date.getFullYear()}-${getZero(date.getMonth()+1)}-${getZero(date.getMonth()+1)} ${getZero(date.getHours())}:${getZero(date.getMinutes())}`;
};
console.log(formatDate());
console.log(formatDate(new Date(2025, 10, 5, )));
console.log(formatDate(new Date(0)));
console.log(formatDate(new Date('2012-01-26T13:51:50.417Z')));
console.log(formatDate(new Date("2018-2-20")));
console.log(formatDate(new Date("2018-2-20 12:58")));
//--------------------------------------- 2 --------------------------------
const checkPath = (arr) => {
    if (arr.length !== 0) {
        const path = arr.join('/');
        return path.replace(/^([/]{0,5})/, '/');
    }
    else return '';
};

const checkParam = (obj) => {
    if (Object.keys(obj).length !== 0) {
        let param = '?';
        for (let key in obj) {
            if(obj.hasOwnProperty(key))
            param += `${key}=${obj[key]}&`;
        }
        return param.replace(/&$/, '');
    }
    else return '';
};

const createUrl = (domain, path =  [], param = {})=>{
    return `${domain.replace(/[/]{0,5}$/, '')}${checkPath(path)}${checkParam(param)}`;
};
console.log(createUrl('http://www.google.com.ua'));
console.log(createUrl('http://www.google.com.ua', ['user', 'cjh432ujfj3igje', 'friends'], { limit: 20, offset: 0, query: "Gary" }));
console.log(createUrl('http://www.google.com.ua/', ['//user', 'cjh432ujfj3igje', 'friends'], { limit: 20, offset: 0, query: "Gary" }));
console.log(createUrl('http://www.google.com.ua', ['user', 'cjh432ujfj3igje', 'friends']));

//----------------------------------3-----------------------------------
const clearDuplicate = (arr)=>{
    const result = [];
    arr.forEach((element)=>{
        if(result.indexOf(element) === -1){
            result.push(element);
        }
    });
    return result;
};
// Рішення ок, але тут можна було заюзати Set
console.log(clearDuplicate(['123', 123, 'yarik', 'yarik', 'course']));
console.log(clearDuplicate(['123',5,6,44,5, 'Yarik', 'yarik', 'course']));
console.log(clearDuplicate(['course', 'course', 'course']));
//--------------------------------4-------------------------------------
const sortArray = (property, array)=>{
    let result = []; // змінна result тут лшиня, можна відразу повертати array.slice().sort((a,b) => a[property] > b[property] ? 1 : -1);
    result = array.slice().sort((a,b) => a[property] > b[property] ? 1 : -1);
    return result;
};

console.log(sortArray("age", [{name: "Steve", age: 22}, {name: "Max", age: 12}, {name: "Stephanie", age: 32}]));
console.log(sortArray("age", [{name: "Pasha", age: 22}, {name: "Yarik", age: 20}, {name: "Steve", age: 22}, {name: "Max", age: 12}, {name: "Stephanie", age: 32}]));
console.log(sortArray("name", [{name: "Steve", age: 22}, {name: "Max", age: 12}, {name: "Stephanie", age: 32},{name: "Stephanie", age: 87},{name: "Stephanie", age: 18}]));
//-------------------------------5---------------------------------------------

const editObject = (properties, obj) => {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            const even = (element) => element === key;
            if (properties.some(even) === false) delete obj[key]; // поганий підхід - ти мутуєш вхідний об'єкт, треба додавати ці властивості в новий, а не видаляти старі, так можна десь щось зламати випадково
        }
    }
    return obj;
};
console.log(editObject(["id", "name"], { id: 33, status: "Unemployed", married: true, name: "Arthur" }));
console.log(editObject(["id", "status"], { id: 33, status: "Unemployed", married: true, name: "Arthur" }));
console.log(editObject(["married", "name"], { id: 33, status: "Unemployed", married: true, name: "Arthur" }));
console.log(editObject(["name"], { id: 33, status: "Unemployed", married: true, name: "Arthur" }));
