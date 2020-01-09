function convertToRoman(num) {
  /*
  (Integer) -> (String)
  Takes an integer and returns its value in Roman numerals.
  
  ->convertToRoman(3999)
  MMMCMXCIX
  ->convertToRoman(4000)
  MṼ
  ->convertToRoman(4999)
  MṼCMXCIX
  ->convertToRoman(9999)
  MX̃CMXCIX
  ->convertToRoman(10000)
  X̃
  ->convertToRoman(1000000)
  M̑
  */
  
  var map = [{ d:1, r:'I' },{ d:4, r:'IV' },{ d:5, r:'V' },
    { d:9, r:'IX' },{ d:10, r:'X' },{ d:40, r:'XL' },
    { d:50, r:'L' },{ d:90, r:'XC' },{ d:100, r:'C' },
    { d:400, r:'CD' },{ d:500, r:'D' },{ d:900, r:'CM' },
    { d:1000, r:'M' },{ d:4000, r:'MṼ' },{ d:5000, r:'Ṽ' },
    { d:9000, r:'MX' },{ d:10000, r:'X̃'},{d:50000, r: 'L̑'},
    { d: 100000, r: 'C̃'},{d:500000, r:'D̃'},{d: 1000000, r: 'M̑'}
    ];
  
  var result = '';
  
  while (num > 0) {

    var max = map[0];
    map.forEach(function(jul) {
      if (jul.d <= num) {
        max = jul;}
      });
    result += max.r;
    num -= max.d;
  }
  return result;
}
