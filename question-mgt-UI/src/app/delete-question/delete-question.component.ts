import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../service/question-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.css']
})
export class DeleteQuestionComponent implements OnInit {

  service:QuestionServiceService;
  show:boolean=false;
  response:boolean;

  constructor(service:QuestionServiceService) {
    this.service=service;
  }

  ngOnInit(): void {
  }

  deleteQuestion(deleteForm:any){
    let questionId = deleteForm.value.questionId;
    console.log(questionId);
    let result : Observable<boolean> = this.service.deleteQuestion(questionId);
    result.subscribe((ans:boolean)=>{
    this.response=true;
    console.log(ans);
    this.show=true;
  },
    error =>{
      this.response=false;
      this.show=true;
      console.log("No such Question found. ");
    });
  }

}
