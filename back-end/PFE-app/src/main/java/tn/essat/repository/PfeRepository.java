package tn.essat.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.essat.entity.Pfe;

@Repository
public interface PfeRepository extends JpaRepository<Pfe, Long> {

}
