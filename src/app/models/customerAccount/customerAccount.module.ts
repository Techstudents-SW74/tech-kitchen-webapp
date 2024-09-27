import { Table } from "../table/table.module";

export interface CustomerAccount{
    id:number;
    accountName:string;
    accountOwner:string;
    totalOrder:number;
    accountStatus:string;
    totalGuests:number;
    table:Table;
}