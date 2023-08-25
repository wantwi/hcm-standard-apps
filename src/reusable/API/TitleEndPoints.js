import { BaseAPIURL } from "./base";

export const SearchTitles =(filter)=>`${BaseAPIURL}Titles?filter=${filter}`
export const GetTitleById =(Id)=>`${BaseAPIURL}Titles/${Id}`
export const PostTitle =()=>`${BaseAPIURL}Titles`