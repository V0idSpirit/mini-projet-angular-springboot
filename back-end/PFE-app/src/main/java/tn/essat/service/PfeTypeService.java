package tn.essat.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import tn.essat.entity.PfeType;
import tn.essat.repository.PfeTypeRepository;

@Service
public class PfeTypeService {
	@Autowired
	private PfeTypeRepository pfeTypeRepository;

	public void save(PfeType pfeType) {
		pfeTypeRepository.saveAndFlush(pfeType);
	}

	public List<PfeType> findAll() {
		return pfeTypeRepository.findAll();
	}

	public void delete(Long id) {
		pfeTypeRepository.deleteById(id);
	}

	public PfeType getById(Long id) {
		Optional<PfeType> pfeTypeOptional = pfeTypeRepository.findById(id);
		if (pfeTypeOptional.isPresent()) {
			return pfeTypeOptional.get();
		} else {
			throw new RuntimeException("PFE Type Not Found");
		}
	}
}
