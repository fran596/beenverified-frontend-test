const searchValidator = values => {
    const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errors = {};
  
    /*searchTxt validator */
    if (values.searchTxt) {
      if (values.searchTxt.match(regex) === null) {
        errors.searchTxt = "A valid email address is required";
      }
    }
    
  
    return errors;
  };
  
  
  
  export default searchValidator;
  
  