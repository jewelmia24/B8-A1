# TypeScript OOP-তে Access Modifiers-এর ব্যবহার


TypeScript-এর Object-Oriented Programming (OOP)-এ Access Modifier ব্যবহার করে class-এর property ও method কোথা থেকে access করা যাবে তা নিয়ন্ত্রণ করা হয়। এটি **Encapsulation** নিশ্চিত করতে সাহায্য করে। TypeScript-এ `public`, `private` এবং `protected` visibility নিয়ন্ত্রণ করে। অন্যদিকে, `readonly` কোনো property পুনরায় assign করা থেকে বিরত রাখে।

## Public

`public` member যেকোনো জায়গা থেকে access করা যায়। TypeScript-এ এটি default modifier, তাই আলাদাভাবে না লিখলেও member public থাকে।

```ts
class User {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const user = new User("Jewel");
console.log(user.name); 
```

## Private এবং Protected

`private` member শুধু যে class-এর মধ্যে declare করা হয়েছে, সেই class-এর ভেতর থেকেই access করা যায়। অন্যদিকে, `protected` member নিজ class এবং তার subclass থেকে access করা যায়, কিন্তু class-এর বাইরের সাধারণ instance দিয়ে access করা যায় না।

```ts
class Employee {
  private salary = 30000;
  protected department = "Engineering";

  getSalary(): number {
    return this.salary;
  }
}

class Manager extends Employee {
  showDepartment(): string {
    return this.department; // বৈধ
  }
}

const employee = new Employee();
```

## Readonly

`readonly` property declare করার সময় অথবা constructor-এর ভেতরে initialize করা যায়। এরপর সেই property-তে নতুন value assign করা যায় না।

```ts
class Product {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}

const product = new Product(101);
```

