function A(){
  function B(){
    document.write("Hello World");

  }
  return B;
}
var c = A();
c();
