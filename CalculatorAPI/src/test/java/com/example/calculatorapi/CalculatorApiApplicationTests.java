package com.example.calculatorapi;

import com.example.calculatorapi.controllers.CalculationController;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class CalculatorApiApplicationTests {

    @LocalServerPort
    private int port;

    @Autowired
    private CalculationController calculationController;

    @Test
    void contextLoads() {
        assertThat(calculationController).isNotNull();
    }

    @Test
    public void calculationTest() throws JSONException {
        JSONObject body = new JSONObject();
        body.put("number1", 10);
        body.put("operation", "add");
        body.put("number2", 10);
        mvc.perform(this.calculationController.add("http://localhost:" + port + "/", body))
    }


}
