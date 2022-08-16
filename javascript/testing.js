function concatSrings(strA,strB){
  console.log(strA + strB);

}
concatSrings("abc","def");// output: abcdef
concatSrings(1,3); // output: 4
concatSrings("123","456"); // output: 123456
 
//to write this as an expectation in some testing frameworks such as JEST
expect(concatSrings("abc","def")).toBe("abcdef");
expect(concatSrings(1,3)).toBe(4);
expect(concatSrings("123","456")).toBe("123456");

//three types of testing
 //1 end to end testing  - expensive test
    //- example of end to end testing "WebdriverJs","Protector","Cypress"
//2 integration testing - avarage test
  //-  "react-testing-library" and "enzyme"
 //3 unit testing- cheap test eaqsy to write
 //-Unit testing is the process of testing the smallest units of your source code in isolation
  //-jasmin,mocha,qUnit,Jest,Karma
     //Jest
     //Jest is a JavaScript testing framework. It's often used for testing code like React, a JavaScript library 
     //--Besides plain JavaScript and React code just allows you to test Babel, TypeScript, Node, Angular, Vue, and various other frameworks. Jest also supports code coverage.
     //Mocking allows you to separate the code that you are testing from it's related dependencies. In other words, you can use the mocking features to make sure that your unit testing is stand-alone. 