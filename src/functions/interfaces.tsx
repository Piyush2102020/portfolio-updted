interface projectInterface{
name:string;
shortDescription:string;
description: string;
techStack:string[];
timeTaken: string;
status: string;
type:string;
tags:string[];
features: string[]
purpose:string ;
images:{front:{
    center:string;
    left:string;
    right:string;
},backend:string[]};
logo:string;
}


export default projectInterface