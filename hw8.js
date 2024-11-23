// 1.Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы),
// days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    console.log(`Salary: ${this.rate * this.days}`);
  }

  getFullName() {
    console.log(`Worker name: ${this.name} ${this.surname}`);
  }
}

const fistWorker = new Worker("Andrew", "Ivanov", 350, 18);
const secondWorker = new Worker("Petr", "Smirnov", 500, 15);
fistWorker.getFullName();
fistWorker.getSalary();
secondWorker.getFullName();
secondWorker.getSalary();

// 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников.
// И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }

  getSalary() {
    console.log(`Salary: ${this.rate * this.days * this.workers}`);
  }
}

const boss = new Boss("Mark", "Titov", 650, 20, 2);
boss.getFullName();
boss.getSalary();

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

class Worker2 {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  get rate() {
    return this._rate;
  }

  set rate(rate) {
    if (rate < 0) {
      console.log("Значение rate не может быть отрицательным");
    } else {
      this._rate = rate;
    }
  }

  get days() {
    return this._days;
  }

  set days(days) {
    if (days < 0) {
      console.log("Значение days не может быть отрицательным");
    } else {
      this._days = days;
    }
  }

  getSalary() {
    console.log(`Salary: ${this.rate * this.days}`);
  }

  getFullName() {
    console.log(`Worker name: ${this.name} ${this.surname}`);
  }
}

const worker = new Worker2("Petr", "Smirnov", 100, 5);
worker.getFullName();
worker.getSalary();

// 4. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString {
  constructor(string) {
    this.string = string;
  }

  reverse() {
    return this.string.split("").reverse().join("");
  }

  ucFirst() {
    return this.string[0].toUpperCase() + this.string.slice(1);
  }
  ucWords() {
    return this.string
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  }
}

const str = new MyString("класс должен иметь следующие свойства");
console.log(str.reverse());
console.log(str.ucFirst());
console.log(str.ucWords());

// 5. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того,
// класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

class Validator {
  constructor(string) {
    this.string = string;
  }

  isEmail() {
    const reg =
      /^[a-zA-Z0-9_'+*/^&=?~{}\-](\.?[a-zA-Z0-9_'+*/^&=?~{}\-])*\@((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(\:\d{1,3})?)|(((([a-zA-Z0-9][a-zA-Z0-9\-]+[a-zA-Z0-9])|([a-zA-Z0-9]{1,2}))[\.]{1})+([a-zA-Z]{2,6})))$/;
    return reg.test(this.string);
  }

  isDomain() {
    const reg =
      /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/;
    return reg.test(this.string);
  }

  isDate() {
    const reg =
      /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/;
    return reg.test(this.string);
  }

  isPhone() {
    const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return reg.test(this.string);
  }
}
const mail = new Validator("mail@mail.com");
console.log(mail.isEmail());
const domain = new Validator("google.com");
console.log(domain.isDomain());
const date = new Validator("01/01/2025");
console.log(date.isDate());
const phone = new Validator("+79101234577");
console.log(phone.isPhone());

// 6. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год получите самостоятельно с помощью new Date.

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    console.log(`${this.name} ${this.surname}`);
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const currentDate = new Date().getFullYear();

    if (currentDate - this.year <= 5 && currentDate - this.year >= 1) {
      console.log(
        `${currentDate - this.year + 1} курс`
      ); /*если считать что поступление было осенью, то следующий год тоже этот же курс, возможно не нужно добавлять 1*/
    } else if (currentDate - this.year === 0) {
      console.log(`1 курс`);
    } else {
      console.log(`Такого курса нет`);
    }
  }
}

const student = new Student("Alex", "Petrov", 2020);
student.getFullName();
student.getCourse();
