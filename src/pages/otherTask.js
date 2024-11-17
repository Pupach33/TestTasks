function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }


  function isPolindrom(str) {
    let palindrom = str
      .toLowerCase()
      .split("")
      .filter((palin) => {
        return (palin >= "a" && palin <= "z") || (palin >= "0" && palin <= "9");
      })
      .join("");
    let reversedPalindrom = palindrom.split("").reverse().join("");
  
    return palindrom === reversedPalindrom;
  }

  isPolindrom("А роза упала на лапу Азора"); // true
  isPolindrom("Привет"); // false

  

  
  function chunkArray(array, size) {
    const result = [];
    if (array.length === 0) {
      return [];
    }
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2); 
  chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3); 


  
  class Calculator {
    constructor() {
      
    }
  
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        return "Нельзя делить на 0!!!!";
      } else {
        return a / b;
      }
    }
  }





  class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.status = "доступна";
    }
  }
  class Library {
    constructor() {
      this.books = [];
    }
    addBook(book) {
      this.books.push(book);
    }
    borrowBook(isbn) {
      let book = this.books.find((book) => book.isbn === isbn);
      if (!book) {
        console.log("Книга не найдена.");
        return;
      }
      if (book.status === "доступна") {
        book.status = "взята";
        console.log(`Вы взяли книгу ${book.title} от автора ${book.author}`);
      } else {
        console.log("Книги нет в наличии ");
      }
    }
    returnBook(isbn) {
      let book = this.books.find((book) => book.isbn === isbn);
      if (!book) {
        console.log("Книга не найдена.");
        return;
      }
      if (book.status === "взята") {
        book.status = "доступна";
        console.log(`Вы вернули книгу`);
      } else {
        console.log("Книги и так в наличии ");
      }
    }
    listAvailableBooks() {
      let book = this.books.filter((book) => book.status === "доступна");
      if (book.length > 0) {
        book.map((book) =>
          console.log(`${book.title} (Автор: ${book.author}, isbn: ${book.isbn})`)
        );
      } else {
        console.log("Нет книг в наличии");
      }
    }
  }





  function debounce(func, delay) {
    let timeoutId;
    return function (...item) {
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => {
        func(...item);
      }, delay);
    };
  }


  debouncedFunction();
  debouncedFunction();


  function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map((item) => deepClone(item));
    }
  
    const copyObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copyObj[key] = deepClone(obj[key]);
      }
    }
  
    return copyObj;
  }
  

  const original = {
    name: 'John',
    address: {
    city: 'New York',
    country: 'USA'
 }
};
const copy = deepClone(original);
copy.address.city =
'Los Angeles';
console.log(original.address.city); 

console.log(copy.address.city); 