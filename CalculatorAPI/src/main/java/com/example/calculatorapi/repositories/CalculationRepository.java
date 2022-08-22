package com.example.calculatorapi.repositories;

import com.example.calculatorapi.models.Calculation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalculationRepository extends JpaRepository<Calculation, Long> {

}
