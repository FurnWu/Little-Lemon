/*export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }
  
  export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
  
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };
  export const submitAPI = function(formData) {
    return true;
  };*/

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };
  
  export function fetchAPI(date) {
    let result = [];
    let nd = new Date(date);
    let seed = nd.getDate();
  
    let random = seededRandom(seed);
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
   
  }
  
  export function submitAPI(formData) {
    return true;
  }
  