export interface RowItem{
  imageName:string;
  link:string;
}


export interface RowContent{
  products:RowItem[];
  // extra data to get iamge sourrce
  extraPath:string;
  // displayed Text
  header:string;
  // if linkt to shop should be displayed
  showLink:boolean;
}

const bestSellersProducts:RowItem[] = [
  {
    imageName:"coffe",
    link:"#"
  },
  {imageName:"jenga",link:"$"}
]

export const bestSellersRowData:RowContent = {
  extraPath:"rows/bestSellers",
  products:bestSellersProducts,
  header:"Best Sellers",
  showLink:true
}