<!-- 1.some diffrence between interface and type in Typescript:

#Interface:
 An interface is a structure which say what type of function stay in which class but not told  about function implementation.
In any object we can use interface but in primative type can't use interface property.

#Type:
 A type creates a type alias like object,union,intersection and primitive.Mostly type using for complex type declearation .

 ***Main diffrent between interface and types are
  in interface to determine the structure of an object or class
  and type define any type like object,union,primitiv.

  Ex.
  //interface
  interface  Person{
    name:string;
    age:number;
  }

  //Type
  type Person = {
    name:string;
    age;number;
  };

  The two example works above are the same, only the  difference is in syntax and flexibility.


  7.let describe about using union and intersection

  #Union Type:
    A variable can take a value of any one of multiple types.
  Ex.
  let value: number | string;
   value = 42; value="Hello"

 Any one of multiple types can be accepted.Either one or the other.Not giving two type value at one time.


 #Intersection Type:
      In intersection type both qualities must be present together.The variable must have all the properties of both.
   Ex.
    type Student = { name: string };
    type Teacher = { age: number };

    type StudentTeacher = Student & Teacher;

    const person: StudentTeacher = {
     name: "Jac",
     age: 40,
  };
    
  The variable person contains both name and age — required by both types. -->