import { Component, OnInit } from '@angular/core';
import { QuestionServiceService } from '../service/question-service.service';
import { QuestionOptions } from '../model/questionOptions';
import { Question } from '../model/question';
import { QuestionDto } from '../model/questionDto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  
    service : QuestionServiceService;
    question : QuestionOptions = new QuestionOptions();
    show: boolean = false;
    questionResp : Question;
    questionOptions : String[];
    resp:boolean = false;
  
  constructor(service: QuestionServiceService) { 
    this.service=service;
  }

  ngOnInit(): void {
  }

  updateQuestion(form:any){
    let details=form.value;
    let testId = details.testId;
    let questionId = details.questionId;
    let questionTitle = details.questionTitle;
    let questionAnswer = details.questionAnswer;
    let questionOption1 = details.questionOption1;
    let questionOption2 = details.questionOption2;
    let questionOption3 = details.questionOption3;
    let questionOption4 = details.questionOption4;
    let questionMarks = details.questionMarks;
    let chosenAnswer = details.chosenAnswer;
    let marksScored = details.marksScored;
    this.questionOptions = [questionOption1,questionOption2,questionOption3,questionOption4];

    let finalQuestionObj = new QuestionDto(testId,questionTitle,this.questionOptions,questionAnswer,
      questionMarks, chosenAnswer, marksScored);

    let result : Observable<Question> = this.service.updateQuestion(finalQuestionObj, questionId);
    result.subscribe((response:Question)=>{
      this.questionResp=response;
      this.resp=true;
    },
      err =>{
      this.resp= false;
      console.log("No such Question exists.");
    });

    this.show=true;
    form.reset();

  }

}
