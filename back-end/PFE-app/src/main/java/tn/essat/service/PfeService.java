package tn.essat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.essat.entity.Pfe;
import tn.essat.repository.PfeRepository;

@Service
public class PfeService {
	@Autowired
	private PfeRepository pfeRepository;

	public void save(Pfe pfe) {
		pfeRepository.saveAndFlush(pfe);
	}

	public List<Pfe> findAll() {
		return pfeRepository.findAll();
	}

	public void delete(Long id) {
		pfeRepository.deleteById(id);
	}

	public Pfe getById(Long id) {
		Optional<Pfe> pfeOptional = pfeRepository.findById(id);
		if (pfeOptional.isPresent()) {
			return pfeOptional.get();
		} else {
			throw new RuntimeException("PFE Not Found");
		}
	}

}
