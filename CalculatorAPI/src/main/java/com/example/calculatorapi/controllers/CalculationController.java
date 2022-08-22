package com.example.calculatorapi.controllers;

import com.example.calculatorapi.models.Calculation;
import com.example.calculatorapi.repositories.CalculationRepository;
import com.example.calculatorapi.services.CalculationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/calculate")
public class CalculationController {
    @Autowired
    private CalculationRepository calculationRepository;

    @CrossOrigin
    @GetMapping
    public List<Calculation> list(){
        return calculationRepository.findAll();
    }

    @CrossOrigin
    @RequestMapping( value = "/add", method = RequestMethod.POST)
    public Calculation add(@RequestBody Calculation calculation){
        calculation.setResult(CalculationService.add(calculation.getNumber1(), calculation.getNumber2()));
        calculationRepository.save(calculation);
        return calculation;
    }

    @CrossOrigin
    @RequestMapping( value = "/divide", method = RequestMethod.POST)
    public Calculation devide(@RequestBody Calculation calculation){
        calculation.setResult(CalculationService.divide(calculation.getNumber1(), calculation.getNumber2()));
        calculationRepository.save(calculation);
        return calculation;
    }

    @CrossOrigin
    @RequestMapping( value = "/subtract", method = RequestMethod.POST)
    public Calculation subtract(@RequestBody Calculation calculation){
        calculation.setResult(CalculationService.subtract(calculation.getNumber1(), calculation.getNumber2()));
        calculationRepository.save(calculation);
        return calculation;
    }

    @CrossOrigin
    @RequestMapping( value = "/multiply", method = RequestMethod.POST)
    public Calculation multiply(@RequestBody Calculation calculation){
        calculation.setResult(CalculationService.multiply(calculation.getNumber1(), calculation.getNumber2()));
        calculationRepository.save(calculation);
        return calculation;
    }
}
