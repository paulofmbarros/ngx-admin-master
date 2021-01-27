export class EchartsPieModel{
    name:string;
    data:Array<{
        Value:number,
        Name:string
    }>

    /**
     *
     */
    constructor(Name:string, Data:Array<any>) {
        this.name=Name;
        this.data=Data;
        
    }
}