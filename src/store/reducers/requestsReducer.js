const initState = {
    requests: [
      {id: '1', title: 'اللغة الفرنسية', content: 'blah blah blah'},
      {id: '2', title: 'اللغة العربية', content: 'blah blah blah'},
      {id: '3', title: 'اللغة الإنجليزية', content: 'blah blah blah'}
    ]
  }
  
  const requestsReducer = (state = initState, action) => {

    switch (action.type) {
      case 'CREATE_REQUEST_SUCCESS':
        console.log('create project success');
        return state;
      case 'CREATE_REQUEST_ERROR':
        console.log('create project error');
        return state;
      default:
        return state;
    }
    
  };
  
  export default requestsReducer;