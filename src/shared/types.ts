export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus", 
}

export interface IBenefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface IClass {
  name: string;
  description?: string;
  image: string;
}