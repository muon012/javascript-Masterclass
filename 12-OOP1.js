// Primitives, object, constructor, Object object, prototype, prototype chain

/****************************
 Primitives 
 ***************************/
// Primitives are data types: string, number, boolean, undefined, null. Objects are everything else that isn't a
// primitive.

/****************************
 Object 
 ***************************/
// Objects are type: array, function, object, dates, wrappers for numbers/strings/booleans

/****************************
 Constructor 
 ***************************/
// In JS, a constructor/prototype is the same as a class in other languages.

/****************************
 Object object
 ***************************/
// In JS, all objects inherit from the Object object.

/****************************
 Prototype 
 ***************************/
// It is the property that allows inheritance among constructors. ALL JS objects have this property.
// In this property we put all the methods and properties we want the instances to inherit.

/****************************
 Prototype Chain 
 ***************************/
// When a method/property is called, the search starts at the object itself. If it can't find it, then it moves to the 
// object's prototype(the parent object), until it reaches the Object object, if it's not there, the final stop is "null"
// and "undefined" is returned.
