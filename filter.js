const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersUnder30 = users.filter(user => user.age < 30);
  console.log(usersUnder30); 
  
  const usersUnder31 = users.filter(user => (user.age < 31)).map(user => user.name)
  console.log(usersUnder31)