export class NewNodeModel {
    isRealSensor:boolean=false
    sensorsImplemented:any[]=[]
    street: string=''
    doorNumber:number=0
    postalCode:string=''
    county:string=''
    district:string=''
 
    constructor(street:string, doorNumber:number, postalCode:string,county:string, district:string, isRealSensor:boolean, sensorsImplemented:any[] ){
        this.street=street;
        this.doorNumber=doorNumber;
        this.postalCode=postalCode;
        this.county=county;
        this.district=district;
        this.isRealSensor=isRealSensor;
        this.sensorsImplemented=Object.assign([],sensorsImplemented);

    }
}
