package com.infy.dao;

import java.util.List;

import com.infy.entity.ServerEntity;
import com.infy.model.Server;

public interface ServerDAO {
	public String addClient(Server server);
	public String deleteClient(String[] ipaddress) throws Exception;
	public List<Server> getAllClients() throws Exception;
	public String sendMessage(String message) throws Exception;
}
