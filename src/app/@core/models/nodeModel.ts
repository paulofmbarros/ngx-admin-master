export class NodeModel {
     IdNode:number=0
     Description:string=''
     IdLocation:number=0
     IdNearStation:number=0
     IsEnable:boolean=false
     IsRealSensor:boolean =false
     IsSprinklerON:boolean =false
     IsLightOn:boolean =false
     IsSecurityCameraOn:boolean =false
    
/**
 *
 */
constructor(idNode:number,description:string,idLocation:number,idNearStation:number,isEnable:boolean,isRealSensor:boolean,isSprinklerOn:boolean,isLightOn:boolean,isSecurityCameraOn:boolean) {
    this.IdNode=idNode;
    this.Description=description;
    this.IdLocation=idLocation;
    this.IdNearStation=idNearStation;
    this.IsEnable=isEnable;
    this.IsRealSensor=isRealSensor;
    this.IsSprinklerON=isSprinklerOn;
    this.IsLightOn=isLightOn;
    this.IsSecurityCameraOn=isSecurityCameraOn;
    
}
}
