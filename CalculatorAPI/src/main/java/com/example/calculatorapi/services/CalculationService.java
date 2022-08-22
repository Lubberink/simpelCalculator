package com.example.calculatorapi.services;

public class CalculationService {
    public static double add(int number1, int number2){
        return number1 + number2;
    }

    public static double subtract(int number1, int number2){
        return number1 - number2;
    }

    public static double multiply(int number1, int number2){
        return number1 * number2;
    }

    public static double divide(int number1, int number2){
        return (double)number1 / number2;
    }
}
