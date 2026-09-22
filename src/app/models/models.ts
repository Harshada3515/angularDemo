export interface IGeo {
  lat:string;
  lng:string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode:string;
  geo:IGeo;
}

export interface ICompany {
  name: string;
  catchPhrase:string;
  bs:string;
}

export interface IUser{
    id:number;
    name:string;
    email:string;
    username:string;
    address:IAddress;
    phone:string;
    website:string;
    company:ICompany;
}