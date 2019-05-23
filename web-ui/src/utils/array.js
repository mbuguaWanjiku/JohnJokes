function remove(state, stateKey, value) {
  const data = state[stateKey].filter(el => {
    return el.id !== value.id;
  });

  return {
    ...state,
    [stateKey]: data
  };
}

function add(state, stateKey, value) {
  return {
    ...state,
    [stateKey]: [...state[stateKey], value]
  };
}

function update(state, stateKey, propToUpdate, value) {
  const data = state[stateKey].filter(el => {
    if (el.id === value.id) {
      return (el[propToUpdate] = value[propToUpdate]);
    }
    return el;
  });

  return {
    ...state,
    [stateKey]: data
  };
}

function filterByCreteria(state, stateKey, criteria, value) {
  const data = state[stateKey].filter(el => {
    return (el[criteria] === value);
  });
  
  if(data.length > 0){
    return {
      ...state,
      [stateKey]: data
    };
  }
  return state;
  
}

export { remove, add, update, filterByCreteria };
