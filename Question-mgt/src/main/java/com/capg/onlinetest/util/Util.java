package com.capg.onlinetest.util;

import com.capg.onlinetest.dto.CreateQuestionRequest;
import com.capg.onlinetest.entity.Question;

public class Util {
	
	public static Question convert(CreateQuestionRequest dto) {
		Question question = new Question();
		question.setTestId(dto.getTestId());
		//question.setQuestionId(dto.getQuestionId());
		question.setQuestionTitle(dto.getQuestionTitle());
		question.setQuestionAnswer(dto.getQuestionAnswer());
		question.setChosenAnswer(dto.getChosenAnswer());
		question.setQuestionMarks(dto.getQuestionMarks());
		question.setMarksScored(dto.getMarksScored());
		question.setQuestionOptions(dto.getQuestionOptions());
		
		return question;
	}

}
