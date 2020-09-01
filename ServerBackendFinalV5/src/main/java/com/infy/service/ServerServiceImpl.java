package com.infy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.infy.dao.ServerDAO;
import com.infy.entity.ServerEntity;
import com.infy.model.Server;

@Service(value="ServerServiceImpl")
@Transactional
public class ServerServiceImpl implements ServerService {

	@Autowired
	private ServerDAO serverDao; 
	
	@Override
	public String addClient(Server server){
		
		return serverDao.addClient(server);
	}
	
	@Override
	public String deleteClient(String[] ipaddress) throws Exception{
		return serverDao.deleteClient(ipaddress);
	}
//
	@Override
	public List<Server> getAllClients() throws Exception {
		
		return serverDao.getAllClients();
	}
	@Override
	public String sendMessage(String message) throws Exception{
		return serverDao.sendMessage(message);
	}
	
}
