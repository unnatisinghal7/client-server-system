package com.infy.api;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.infy.model.Server;
import com.infy.service.ServerServiceImpl;


@CrossOrigin
@RestController
@RequestMapping("clientApi")
public class ServerApi {
	static Logger logger = LogManager.getLogger(ServerApi.class);
	@Autowired
	Environment environment;
	@Autowired
	ServerServiceImpl serviceImpl;
	
	@RequestMapping(value="client",method=RequestMethod.GET)
	public ResponseEntity<List<Server>> getAllClients() throws Exception {
		logger.trace("<C> ClientAPI <M> getAllClients");
		List<Server> server=new ArrayList<Server>();
		try {
			
			
			server=serviceImpl.getAllClients();
		
			
			return new ResponseEntity<List<Server>>(server,HttpStatus.OK);
		} catch (Exception e) {
		
			e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND,	e.getMessage(), e);
		}

	}
	
	@RequestMapping(value="add", method=RequestMethod.PUT)
	public ResponseEntity<String> addClient(@RequestBody Server server) {
		logger.trace("<C> addAPI <M> addClient");
		
		serviceImpl.addClient(server);
		
		ResponseEntity<String> response=new ResponseEntity<String>(HttpStatus.OK);
		
		return response;
	}
	@RequestMapping(value="delete", method=RequestMethod.PUT)
	public ResponseEntity<String> deleteClient(@RequestBody String[] ipaddress) throws Exception {
		logger.trace("<C> addAPI <M> addClient");
		
		serviceImpl.deleteClient(ipaddress);
		String successMessage="Client Deleted successfully";
		ResponseEntity<String> response=new ResponseEntity<String>( HttpStatus.OK);
		return response;
	}
	@PutMapping(value="sendmsg")
	public ResponseEntity<String> sendMessage(@RequestBody String message) throws Exception{
		
		
		logger.trace("<C> sendAPI <M> sendMessage");
		serviceImpl.sendMessage(message);
		String successMessage="Message sent successfully";
		ResponseEntity<String> response=new ResponseEntity<String>(HttpStatus.OK);
		return response;
	}

}
