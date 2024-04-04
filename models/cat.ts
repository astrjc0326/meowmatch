 class Cat {
  name: string;
  age: number;
  introduction: string;
  likes: Cat[];

  constructor(name: string, age: number, introduction: string) {
    this.name = name;
    this.age = age;
    this.introduction = introduction;
    this.likes = [];
  }
}


