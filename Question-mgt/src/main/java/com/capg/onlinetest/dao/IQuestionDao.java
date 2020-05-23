package com.capg.onlinetest.dao;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capg.onlinetest.entity.Question;


@Repository
public interface IQuestionDao extends JpaRepository<Question,BigInteger>{
	
	List<Question> findByTestId(BigInteger testId);
	
	//Question findByQuestionId(BigInteger questionId);
	
}