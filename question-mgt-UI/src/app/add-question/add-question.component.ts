import { Component, OnInit } from '@angular/core';
import { QuestionDto } from '../model/questionDto';
import { QuestionServiceService } from '../service/question-service.service';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { QuestionOptions } from '../model/questionOptions';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  service : QuestionServiceService;
  question : QuestionOptions = new QuestionOptions();
  show:boolean = false;
  questionResp : Question;
  questionOptions: String[];


  constructor(service: QuestionServiceService) { 
    this.service=service;
  }

  ngOnInit(): void {
  }

  onClickAddQuestion(form:any){
    let details=form.value;
    let testId = details.testId;
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

    let result : Observable<Question> = this.service.addQuestion(finalQuestionObj);
    result.subscribe((response:Question)=>{
      this.questionResp=response;
    },
      err =>{
      console.log("Error"+err);
    });

    this.show=true;
    form.reset();

  }


}
