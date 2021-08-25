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

