describe("Audition JavaScript Tests", function() {

  it("SpecRunner runs", function() {
    expect(JavaScriptAudition.itRuns()).toBeTruthy();
  });

  describe("Test converting from numerals to romans", function() {
      it("Convert ones", function(){
        expect(numeralToRoman(5)).toEqual('V');
        expect(numeralToRoman(6)).toEqual('VI');
        expect(numeralToRoman(8)).toEqual('VIII');
        expect(numeralToRoman(9)).toEqual('IX');
        expect(numeralToRoman(1)).toEqual('I');
        expect(numeralToRoman(3)).toEqual('III');
        expect(numeralToRoman(4)).toEqual('IV');
      });
    it("Convert tens", function(){
      expect(numeralToRoman(10)).toEqual('X');
      expect(numeralToRoman(12)).toEqual('XII');
      expect(numeralToRoman(14)).toEqual('XIV');
      expect(numeralToRoman(15)).toEqual('XV');
      expect(numeralToRoman(19)).toEqual('XIX');
      expect(numeralToRoman(20)).toEqual('XX');
      expect(numeralToRoman(49)).toEqual('XLIX');
      expect(numeralToRoman(50)).toEqual('L');
      expect(numeralToRoman(74)).toEqual('LXXIV');
      expect(numeralToRoman(95)).toEqual('XCV');
    });
    it("Convert hundreds", function(){
      expect(numeralToRoman(100)).toEqual('C');
      expect(numeralToRoman(125)).toEqual('CXXV');
      expect(numeralToRoman(259)).toEqual('CCLIX');
      expect(numeralToRoman(500)).toEqual('D');
      expect(numeralToRoman(744)).toEqual('DCCXLIV');
      expect(numeralToRoman(999)).toEqual('CMXCIX');
    });
    it("Convert thousands", function(){
      expect(numeralToRoman(1000)).toEqual('M');
      expect(numeralToRoman(1249)).toEqual('MCCXLIX');
      expect(numeralToRoman(3000)).toEqual('MMM');
    });

  });

});

describe("Test converting from romans to numerals", function() {
  it("Convert Ones", function(){
  expect(romanToNumeral("I")).toEqual(1);
  expect(romanToNumeral("II")).toEqual(2);
  expect(romanToNumeral("III")).toEqual(3);
  expect(romanToNumeral("IV")).toEqual(4);
  expect(romanToNumeral("V")).toEqual(5);
  expect(romanToNumeral("VI")).toEqual(6);
  expect(romanToNumeral("VII")).toEqual(7);
  expect(romanToNumeral("VIII")).toEqual(8);
  expect(romanToNumeral("IX")).toEqual(9);
});

it("Convert Tens", function(){
  expect(romanToNumeral("X")).toEqual(10);
  expect(romanToNumeral("XI")).toEqual(11);
  expect(romanToNumeral("XV")).toEqual(15);
  expect(romanToNumeral("XIX")).toEqual(19);
  expect(romanToNumeral("XX")).toEqual(20);
  expect(romanToNumeral("XLIX")).toEqual(49);
  expect(romanToNumeral("L")).toEqual(50);
  expect(romanToNumeral('XCIV')).toEqual(94);
});
  it("Convert Hundreds", function(){
    expect(romanToNumeral('C')).toEqual(100);
    expect(romanToNumeral('CX')).toEqual(110);
    expect(romanToNumeral('CXL')).toEqual(140);
    expect(romanToNumeral('CLIX')).toEqual(159);
    expect(romanToNumeral('CCLXXIV')).toEqual(274);
    expect(romanToNumeral('CDXCIX')).toEqual(499);
    expect(romanToNumeral('DXCIV')).toEqual(594);
    expect(romanToNumeral('CMXXXVIII')).toEqual(938);
  });
  it("Convert Thousands", function(){
    expect(romanToNumeral('M')).toEqual(1000);
    expect(romanToNumeral('MMM')).toEqual(3000);
    expect(romanToNumeral('MMDCCLI')).toEqual(2751);
  });

});


