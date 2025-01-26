import { Query } from "mongoose";

class QueryBuildrs<T>{
    public modelQuery:Query<T[], T>;
    public query:Record<string, any>
    constructor(modelQuery:Query<T[], T>, query:Record<string, any>){
        this.modelQuery = modelQuery;
        this.query = query;
    }
}