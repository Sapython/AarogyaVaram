import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {
  hospitalFacilities: facility[] = [
    {
      image: "../../assets/Vector1.png",
      title: "Hospital services",
      description: "Explanation",
      featuredImage:"../../assets/Group 1000003008.png",
      facilities:[
        {
          img:"../../assets/Group 1000003026.svg",
          text:"Emergency Department",
        },
        {
          img:"../../assets/Group 1000003027.svg",
          text:"H.D.U.",
        },
        {
          img:"../../assets/Group 1000003028.svg",
          text:"I.C.U.",
        },
        {
          img:"../../assets/Group 1000003029.svg",
          text:"N.I.C.U.",
        },
        {
          img:"../../assets/Group 1000003030.svg",
          text:"Major O.T.",
        },
        {
          img:"../../assets/Group 1000003031.svg",
          text:"Minor Operation Theatre",
        },
        {
          img:"../../assets/Group 1000003032.svg",
          text:"High end dialysis unit",
        }
      ],
    },
    {
      image: "../../assets/Group 1000003044Specialized services.png" ,
      title: "Latest Hospital services",
      description: "Explanation",
      featuredImage:"../../assets/Group 1000003008.png",
      facilities:[
        {
          img:"../../assets/Group 1000003026.svg",
          text:"Bed-side Ultrasound - FAST",
        },
        {
          img:"../../assets/Group 1000003028.svg",
          text:"E-ICU",
        },
        {
          img:"../../assets/Group 1000003030.svg",
          text:"7 Para Monitor",
        }
      ],
    },
    {
      image:"../../assets/Group 1000003024.svg",
      title:"Diagnostic services",
      description:"Explanation",
      featuredImage:"../../assets/Group 1000003008.png",
      facilities:[
        {
          img:"../../assets/Group 1000003026.svg",
          text:"Pathology Lab",
        },
        {
          img:"../../assets/Group 1000003027.svg",
          text:"Digital X-Ray",
        },
        {
          img:"../../assets/Group 1000003028.svg",
          text:"Sonography",
        },
        {
          img:"../../assets/Group 1000003026.svg",
          text:"7 Para Monitor",
        }
      ],
    },
    {
      image:"../../assets/Group 1000003025.svg",
      title:"Supplementary services",
      description:"Explanation",
      featuredImage:"../../assets/Group 1000003008.png",
      facilities:[
        {
          img:"../../assets/Group 1000003026.svg",
          text:"Oxygen Generator",
        },
        {
          img:"../../assets/Group 1000003027.svg",
          text:"Infra Wide Oxygen Supply",
        },
        {
          img:"../../assets/Group 1000003028.svg",
          text:"Fire Alarm system",
        },
      ],
    }

  ]
  currentFacility: facility=this.hospitalFacilities[0]
}
export interface facility {
  image:string,
  title:string,
  description:string,
  featuredImage:string,
  facilities:{
    img:string,
    text:string
  }[]

}
