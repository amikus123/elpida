export const nameToPublicLink = (imageName: string,middlePath:string="") => {
  if (middlePath!==""){
    middlePath+="/"
  }
  return `images/${middlePath}${imageName}.jpg`;
};
