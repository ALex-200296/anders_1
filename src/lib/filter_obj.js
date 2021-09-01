/* 
 * 1. Переменные называем через camelCase, тоесть в нашем случае должно быть filterObj
 * 2. Файл соответственно тоже так же назовем
 * 3. В твоем случае delete удаляет свойства как и в filterObj, так и в самом obj. Чтобы этого избежать можно сделать так
 * const filterObj = { ...obj };
 * */
const filter_obj = (obj) => {
  const filterObj = obj;
  for (let propName in obj) { 
    if (filterObj[propName] === null || filterObj[propName] === undefined || filterObj[propName] === '') {
      delete filterObj[propName];
    }
  }

  return filterObj;
}

export default filter_obj;

