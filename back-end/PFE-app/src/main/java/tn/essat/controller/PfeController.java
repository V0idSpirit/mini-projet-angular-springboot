package tn.essat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.essat.entity.Pfe;
import tn.essat.entity.PfeType;
import tn.essat.payloads.request.AddPfeRequest;
import tn.essat.service.PfeService;
import tn.essat.service.PfeTypeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/pfe")
public class PfeController {
	@Autowired
	private PfeService pfeService;
	@Autowired
	private PfeTypeService pfeTypeService;

	@GetMapping("/all")
	public List<Pfe> findAllJson() {
		return pfeService.findAll();
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id) {
		pfeService.delete(id);
		return new ResponseEntity<String>("PFE deleted successfully.!", HttpStatus.OK);
	}

	@PostMapping("/save")
	public void save(@RequestBody AddPfeRequest addPfeRequest) {
		Long id = Long.valueOf(addPfeRequest.getId().trim());
		PfeType pfeType = pfeTypeService.getById(id);
		Pfe pfe = new Pfe(addPfeRequest.getTitre(), pfeType);
		pfeService.save(pfe);
	}
}
