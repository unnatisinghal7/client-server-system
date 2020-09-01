package com.infy.model;

import java.sql.Timestamp;

public class Client {

	private String timearrived;
	private String message;
	private Integer appear;
	
	public Integer getAppear() {
		return appear;
	}
	public void setAppear(Integer appear) {
		this.appear = appear;
	}
	public String getTimearrived() {
		return timearrived;
	}
	public void setTimearrived(String timearrived) {
		this.timearrived = timearrived;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}

	
}
