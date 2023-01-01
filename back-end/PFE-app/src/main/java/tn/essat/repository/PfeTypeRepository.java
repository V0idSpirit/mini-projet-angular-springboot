package tn.essat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.essat.entity.PfeType;

@Repository
public interface PfeTypeRepository extends JpaRepository<PfeType, Long> {

}
