import { Table } from "../table/table.module";

export interface CustomerAccount{
    id:number;
    customerAccountName:string;
    customerAccountOwner:string;
    customerTotalOrder:number;
    customerAccountStatus:string;
    customerAccountTotalGuests:number;
    table:Table
}