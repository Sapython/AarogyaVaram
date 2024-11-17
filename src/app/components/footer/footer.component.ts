import { Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    depts: string[] = ['Neurology', "Cardiology","Pathology", 'Laboratory',' Analysis',' Pediatric',' Cardiac'];
    links: {text:string,link:string}[] = [
      // 'About Us', 'Contact Us', 'Our Specialists', 'Doctor', 'Timetable', 'Appointments'
      {text:'About Us',link:'aboutus'},
      {text:'Contact Us',link:'contactus'},
      {text:'Our Specialists',link:''},
      {text:'Doctor',link:'empaneleDoctors'},
      // {text:'Timetable',link:''},
      // {text:'Appointments',link:''},
      
    ]

}
