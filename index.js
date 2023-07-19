// const _ = require('lodash');
// Task 1
function findDifference(arr) {
    if (!_.isArray(arr)) return "The function accepts only arrays.";
    if (!_.every(arr, _.isNumber)) return "All elements of the array should be numbers.";
    if (_.size(arr) < 2) return 0;
    return _.max(arr) - _.min(arr);
};
  
// console.log(findDifference([1, 2, 3, -4]));
// console.log(findDifference([16]));
// console.log(findDifference([1, 'hi']));


// Task 2
function filterWordsByLength(str, num) {
    if (!(_.isString(str) && _.isNumber(num))) {
        return "Incorrect type of data";
    }

    let res = _.chain(str)
    .words()
    .filter(word => _.size(word) > num)
    .value();

    return res;
}

// console.log(filterWordsByLength('The sun sets in a blaze of colors over the horizon.', 5));
// console.log(filterWordsByLength(8, 7));


// Task 3
function doesFunctionEndWith(str, strEnd) {
    if (!(_.isString(str) && _.isString(strEnd))) {
        return "Please, enter a string";
    }

    return _.endsWith(str, strEnd);
}

// console.log(doesFunctionEndWith('Lorem ipsum dolor sit amet consectetur adipisicing elit', 'elit'));
// console.log(doesFunctionEndWith(3, 4));

// Task 4
const averagePairs = (arr) => {
    if (!_.isArray(arr) || _.size(arr) < 2) {
        return "The function accepts only arrays with length bigger than 2.";
    }

    return _.chain(arr)
    .initial()
    .map((num, index) => _.mean([num, arr[index + 1]]))
    .value();
};
  
// console.log(averagePairs([2, -2, 2, -2, 2]))
// console.log(averagePairs([1, 3, 5, 1, -10]));

// Task 5

function vowels(string) {
    return _.filter(string, function(v) {
      return /[aeiou]/i.test(v);
    });
}

_.mixin({ 'vowels': vowels });
  
function countVowels(str) {
    if (!_.isString(str)) return "Invalid data type";
    return _.chain(str)
    .vowels()
    .size()
    .value()
}

// console.log(countVowels('Celebration'));
// console.log(countVowels('Palm'));


// Task 6

function findUniqueElements(arr1, arr2) {
    if (!_.isArray(arr1) || !_.isArray(arr2)) return "Function accepts only arrays.";
    return _.chain()
    .union(arr1, arr2)
    .sortBy()
    .value()
}

// console.log(findUniqueElements([1, 2, 3], [100, 2, 1, 10]));


// Task 7

function swapKeysAndValues(obj) {
    if (!_.isObject(obj) || _.isArray(obj) || _.isNull(obj)) {
      return "Invalid data type";
    }
    return _.invert(obj);
}

// console.log(swapKeysAndValues({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


// Task 8

function calculateDifference(items, insurance) {
    if (!(_.isObject(items) && !_.isNull(items) && !_.isArray(items) && _.isNumber(insurance))) {
      return "Invalid input: The first parameter must be an object and the second one - a number.";
    }

    const totalValue = _.sum(_.values(items));
    return totalValue <= insurance ? "The sum of item values must be greater than the insurance limit." : totalValue - insurance;
  }
  
// console.log(calculateDifference({ "baseball bat": 20 }, 5));
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Task 10

function extractFileName(filePath) {
	if (!_.isString(filePath)) return 'Function accepts only valid string paths';
    const fileNamePosition = _.lastIndexOf(filePath, '\\');
    const fileNameExtension = _.lastIndexOf(filePath, '.');

	if(fileNamePosition === -1 || fileNameExtension === -1) {
		return "There is no file name";
	}

	return filePath.slice(fileNamePosition + 1, fileNameExtension);
}

let rawPath = String.raw`c:\WebServers\home\testsite\www\myfile.txt`;

// console.log(extractFileName(rawPath));

// Task 13
function formatLine(str) {
    if (!_.isString(str)) return "The function accepts only strings";

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const emailRegex = /\S+@\S+\.\S+/g;
    const digitsRegex = /\d{4,}/g;

    const replacements = [
        [urlRegex, "[посилання заборонено]"],
        [emailRegex, "[контакти заборонені]"],
        [digitsRegex, ""],
    ];

    let modifiedStr = str;

    _.forEach(replacements, ([regex, replacement]) => {
        modifiedStr = _.replace(modifiedStr, regex, replacement);
    });

    let result = _.capitalize(modifiedStr);

    if (_.size(modifiedStr) > _.size(str)) {
        setInterval(() => alert("Do you need help?"), 5000);
    }

    return result;
}

// console.log(formatLine("to get more info please visit https://animalslover@gmail.com, email me at animalslover@gmail.com or contact me by 380333333333 any time."));

// Task 17

function sortStringByFrequency(str) {
    const charCount = _.countBy(str.toLowerCase());
    const sortedChars = _.chain(charCount)
      .toPairs()
      .orderBy(([char, count]) => count, 'desc')
      .flatMap(([char, count]) => _.repeat(char, count))
      .join('')
      .value();
  
    return sortedChars;
}

// console.log(sortStringByFrequency('Abracadabra'));

// Additional practice
// Написати ф-ію, яка приймає масив об'єктів і міняє в них ключі 'first_name' на 'firstName' та 'status' на 'isActive'. Також значення в полі 'status' має стати 'true'/'false'
// let users = [{id: 1, isActive: true, firstName: 'John'}...]

const users = [
    {
      id: 1,
      status: 'active',
      first_name: 'John'
    },
    {
      id: 2,
      status: 'inactive',
      first_name: 'Mike'
    }
]
  
let normalizeUsers = (users) => {
    return _.map(users, user => {
        return {
        id: user.id,
        isActive: user.status === 'active',
        firstName: user.first_name
        };
    });
};
  
// console.log(normalizeUsers(users));


// Відфільтрувати вхідний масив об'єктів по значенню поля 'name'.
  
let products = [
    {id: 1, name: "milk", price: "1$"},
    {id: 2, name: "bread", price: "2$"},
    {id: 3, name: "meat", price: "3$"}
]
  
let searchProducts = function(products, searchedValue){
    let res = _.filter(products, product => {
        return _.includes(product.name, searchedValue);
    })
    
    return res;
};

// console.log(searchProducts(products, "m")); // --> [{id: 1, name: 'milk', price: '1$'}, {id: 3, name: 'meat', price: '3$'}]

// Видалити з вхідного масиву користувача, який не активний та має менше 100 лайків.

let users2 = [
    {
        id: 1,
        name: "John",
        isActive: true,
        likes: 110
    },
    {
        id: 2,
        name: "Jack",
        isActive: false,
        likes: 70
    },
    {
        id: 3,
        name: "Tom",
        isActive: true,
        likes: 120
    }
]
  
let getPopularUsers = function(users){
    return _.filter(users, function(user){
        return user.isActive && user.likes > 100;
    });
}
  
// console.log(getPopularUsers(users2));

// Перевторити вхідний рядок за прикладом: 'This is super quiz' ---> 'this-is-super-quiz'

let toSlug = function(str){
    let res = _.chain(str)
    .toLower()
    .split(' ')
    .join('-')
    .value();
    return encodeURI(res);
}
  
// console.log(toSlug('This is super quiz'));
  
// Отримавши дані з бекенду у наступному форматі. Трансформувати їх у потрібний формат:
// ["Email: Can't be blank", 'Password: Must contain symbols in different case, Must be at least 8 symbols long', 'PasswordConfirmation: Must match with password']

let backendErrors = {
    email: {
      errors: [{message: "Can't be blank"}]
    },
    password: {
      errors: [
        {message: "Must contain symbols in different case"},
        {message: "Must be at least 8 symbols long"}
      ]
    },
    passwordConfirmation: {
      errors: [{message: "Must match with password"}]
    },
};
  
let convertBackendErrors = _.map(backendErrors, function(value, field){
    let fieldMessages = _.chain(value.errors)
    .map('message')
    .join(", ")
    .value()
    return _.upperFirst(field) + ": " + fieldMessages;
})

// console.log(convertBackendErrors);

// Конвертація flat-list в nested-list

let flatList = [
    {
        id: 1,
        name: 'lvl 1 item 1',
        parentId: null
    },
    {
        id: 2,
        name: 'lvl 1 item 2',
        parentId: null
    },
    {
        id: 3,
        name: 'lvl 2 item 3',
        parentId: 1
    },
    {
        id: 4,
        name: 'lvl 3 item 4',
        parentId: 3
    },
    {
        id: 5,
        name: 'lvl 3 item 5',
        parentId: 2
    },
]

// Отримати:

// [
//     {
//         id:1,
//         children: [
//             {
//                 id: 3,
//                 children: [
//                     {
//                         id: 4,
//                         children: []
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 2,
//         children: [
//             {
//                 id:5,
//                 children: []
//             }
//         ]
//     }
// ]

let addChildren = function(item){
    let children = _.filter(flatList, function(childItem){
        return childItem.parentId === item.id
    })

    let nestedChildren = []
    if(!_.isEmpty(children)) {
        nestedChildren = _.map(children, addChildren)
    }

    return _.assign({}, item, {children: nestedChildren})
}

let nestedList = _.chain(flatList)
    .filter(function(item){
        return item.parentId === null;
    })
    .map(addChildren)
    .value();

// console.log(nestedList);
