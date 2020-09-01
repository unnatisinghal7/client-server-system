package com.infy.service;

import java.util.List;

import com.infy.model.Client;


public interface ClientService {

	public String getMessage(String message) throws Exception;
	public List<Client> getAllMessage() throws Exception;
	public String deleteMessage(Client client) throws Exception;
	
}
