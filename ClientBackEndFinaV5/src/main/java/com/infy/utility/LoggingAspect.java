package com.infy.utility;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

/**
 * This class is to log exceptions which come while application is running.
 * 
 * @author ETA_JAVA
 *
 */
@Component
@Aspect
public class LoggingAspect {

	/**
	 * This method is to log any exception coming from any DAO class method
	 * and to re-throw a new exception with message "DAO.TECHNICAL_ERROR".
	 * 
	 */
	@AfterThrowing(pointcut = "execution(* com.infy.dao.*Impl.*(..))", throwing = "exception")
	public void logExceptionFromDAO(Exception exception) throws Exception {
		
		log(exception);
		throw new Exception("DAO.TECHNICAL_ERROR");

	}

	/**
	 * This method is to log any exception coming from any service class method
	 * and to re-throw the same.
	 */
	@AfterThrowing(pointcut = "execution(* com.infy.service.*Impl.*(..))", throwing = "exception")
	public void logExceptionFromService(Exception exception) throws Exception {
		if (exception.getMessage()!=null && (exception.getMessage().contains("Service") || 
											 exception.getMessage().contains("Validator"))) {
			log(exception);
		}
	}
	

	/**
	 * The following method accepts exception class object, 
	 * initiates the Logger using Log4j.xml file and logs the 
	 * Exception details in a log file present at following 
	 * location "${user.home}/Desktop/Logs/ErrorLog.log"
	 * 
	 * @param exception
	 */
	private void log(Exception exception) {
		
		Logger logger = LogManager.getLogger(this.getClass());
		logger.error(exception.getMessage(), exception);
	}

}
