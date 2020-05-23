import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../service/question-service.service';
import { Question } from '../model/question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-questions-by-testid',
  templateUrl: './get-questions-by-testid.component.html',
  styleUrls: ['./get-questions-by-testid.component.css']
})
export class GetQuestionsByTestidComponent implements OnInit {

  questions: Question[]=[];
  service: QuestionServiceService;
  show: boolean = false;
  resp:boolean = false;

  constructor(service: QuestionServiceService) {
    this.service = service;
   }

  ngOnInit(): void {
  }

  getQuestionsByTestId(form:any){
    let details = form.value;
    let testId = details.testId;
    
    let result : Observable<Question[]> = this.service.getQuestionsByTestId(testId);
    result.subscribe((response:Question[])=>{
      this.questions=response;
      this.resp=true;
    },
      err =>{
        this.resp=false;
      console.log("No such Test found.");
      
    });

    this.show=true;

  }


}

