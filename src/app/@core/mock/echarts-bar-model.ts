export class EchartsBarModel {
    name:string;
    data:Array<{
        Value:number,
        Name:string
    }>

    /**
     *
     */
    constructor(Name:string, Data:Array<any>[7]) {
        this.data=Data;
        
    }
}
