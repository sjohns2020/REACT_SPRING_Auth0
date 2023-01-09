package com.capstone.gratitude.repositories;

import com.capstone.gratitude.models.Praise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PraiseRepository extends JpaRepository<Praise, Long> {
}
