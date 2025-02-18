let obj1 = {
  naam: "dushyant",
  kaam: "berozgar",
  divyajyoti: 120,
  umar: 21,
};

let obj2 = {
  name: "Dushyant Kumar Sharma",
  job: undefined,
  aura: 12300400374000,
  age: 23,
};

const mergeObject = (a, b) => {
  return { ...a, ...b };
};

console.log(
  mergeObject(
    {
      naam: "dushyant",
      kaam: "berozgar",
      divyajyoti: 120,
      umar: 21,
    },
    {
      name: "Dushyant Kumar Sharma",
      job: undefined,
      aura: 12300400374000,
      age: 23,
    }
  )
);

