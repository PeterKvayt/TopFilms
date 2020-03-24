class Film{

  constructor(name, link, description, category){

    this.Name = SetName(name);

    this.Link = SetLink(link);

    this.Description = SetDescription(description);
    
    this.Category = SetCategory(category);
  }

  // Prop film category
  SetCategory(value){
    return SetProperty(value, "category");
  }

  // Prop film description
  SetDescription(value){
    return SetProperty(value, "none");
  }

  // Prop film name
  SetName(value){
    return SetProperty(value, "DefaultName");
  }

  // Prop film link
  SetLink(value){
    return SetProperty(value, "#");
  }

  // Check input properties
  SetProperty(resultValue, defaultvalue){
    if(resultValue == null || resultValue == ""){
      return defaultvalue;
    }
    else{
      return resultValue;
    }
  }
}