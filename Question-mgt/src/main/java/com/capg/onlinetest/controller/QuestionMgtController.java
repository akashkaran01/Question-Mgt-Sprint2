package com.capg.onlinetest.controller;

import java.math.BigInteger;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.onlinetest.dto.CreateQuestionRequest;
import com.capg.onlinetest.entity.Question;
import com.capg.onlinetest.service.QuestionServiceImpl;
import com.capg.onlinetest.util.Util;



@RestController
@RequestMapping("/questions")
public class QuestionMgtController {
	
	
	  private static final Logger Log= LoggerFactory.getLogger(QuestionMgtController.class);

	@Autowired
	private QuestionServiceImpl service;
	
	/*
	 * @GetMapping public ResponseEntity<List<Question>> getAllQuestions(){
	 * List<Question> allquestions = service.getAllQuestions(); return new
	 * ResponseEntity<List<Question>>(allquestions, HttpStatus.OK); }
	 */
	
	@GetMapping("/test/{testId}") 
	public ResponseEntity<List<Question>> getAllQuestionsByTestId(@PathVariable BigInteger testId){
		List<Question> questions = service.getAllQuestionsByTestId(testId);
		Log.info("Test "+testId+" questions fetched.");
		return new ResponseEntity<List<Question>>(questions, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Question> addQuestion(@RequestBody CreateQuestionRequest dto){
		Question question = Util.convert(dto);
		service.addQuestion(question);
		Log.info("Question added successfully.");
		return new ResponseEntity<Question>(question, HttpStatus.OK);		
	}
	
	@PutMapping("/update/{questionId}")
	public ResponseEntity<Question> updateQuestion(@RequestBody CreateQuestionRequest dto,@PathVariable BigInteger questionId){
		Question question = Util.convert(dto);
		service.updateQuestion(question, questionId);
		Log.info("Question updated successfully.");
		return new ResponseEntity<Question>(question, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{questionId}")
	public ResponseEntity<Boolean> deleteQuestion(@PathVariable BigInteger questionId){
		service.deleteQuestion(questionId);
		Log.info("Question removed successfully.");
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	
}
