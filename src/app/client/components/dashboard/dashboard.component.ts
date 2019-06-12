import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public patient: Patient;

  constructor(private patientService: PatientService) { 
     patientService.getPatient(1).subscribe((patient)=>{
       this.patient = patient;
     })
  }

  ngOnInit() {
  }

}
