package tn.essat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.essat.entity.PfeType;
import tn.essat.service.PfeTypeService;

@RestController
@RequestMapping("/pfe-types")
public class PfeTypeController {

	@Autowired
	private PfeTypeService pfeTypeService;

	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/all")
	public List<PfeType> findAllJson() {
		return pfeTypeService.findAll();
	}

}
