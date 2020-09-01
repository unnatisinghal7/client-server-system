package com.infy.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.infy.dao.ClientDAO;
import com.infy.model.Client;


@Service(value = "clientService")
@Transactional
public class ClientServiceImpl implements ClientService {

	@Autowired
	private ClientDAO clientDao;

	// Fetch customer details
	@Override
	public String deleteMessage(Client client) throws Exception{
		return clientDao.deleteMessage(client);
	}
	@Override
	public String getMessage(String message) throws Exception{
		return clientDao.getMessage(message);
	}
	@Override
	public List<Client> getAllMessage() throws Exception{
		return clientDao.getAllMessage();
	}
	
	


}
