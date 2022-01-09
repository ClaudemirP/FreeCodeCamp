const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  console.log(names);

  const nome = users.map(user => ({
      name: user.name,
      age: user.age 
  }));
  console.log(nome);
