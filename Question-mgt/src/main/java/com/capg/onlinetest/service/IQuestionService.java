package com.capg.onlinetest.service;

import java.math.BigInteger;
import java.util.List;

import com.capg.onlinetest.entity.Question;

public interface IQuestionService {

	/*
	 * List<Question> getAllQuestions();
	 */	
	void addQuestion(Question question);
	
	void updateQuestion(Question question, BigInteger questionId);
	
	void deleteQuestion(BigInteger questionId);
	
	
}