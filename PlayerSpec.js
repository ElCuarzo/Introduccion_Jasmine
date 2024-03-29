//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255
function Sum1toN(n){
  let a = 0;
  for (let i = 0; i <= n; i++){
    a += i;
  }
  return a
}
//devuelve la suma del primer y último número en el array
function sumFirstLast(arr){
  let a = 0;
  for(var i = 0; i < arr.length; i++){
    if (i === 0){
      a += arr[i];
    }
    if (i === arr.length-1){
      a += arr[i]
    }
  }
  return a
}
//devuelve la suma del menor y el mayor de un array
function sumMaxMin(arr){
  let max = arr[0];
  let min = arr[0];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return max + min;
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});

describe("sumMaxMin", function(){
    it("debe retornar 11 cuando le entrego [1,3,10]", function() {
        expect(sumMaxMin([1,3,10])).toEqual(11);
    })
    it("debe retornar -12 cuando le entrego [-2,-5,-10]", function(){
        expect(sumMaxMin([-2,-5,-10])).toEqual(-12);
    })
});