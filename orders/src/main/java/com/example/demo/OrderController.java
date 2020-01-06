package com.example.demo;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sun.security.rsa.RSAPublicKeyImpl;

import java.security.InvalidKeyException;
import java.security.interfaces.RSAPublicKey;
import java.util.Base64;

@Controller
public class OrderController {

    private final OrderRepository orders;

    public OrderController(OrderRepository orders) {
        this.orders = orders;
    }


    @PostMapping(path = "/orders", consumes = "application/json")
    @ResponseStatus(value = HttpStatus.OK)
    public void saveOrder(@RequestHeader(value="Authorization") String token, @RequestBody Order order) {
        System.out.println(order);
        System.out.println(token);

        String key = "MFswDQYJKoZIhvcNAQEBBQADSgAwRwJAfh7+S/hax8d0+ngjE7/5MvAYQNNI3olCP/ULmD9j/PY6j6PR9C6uLr3idgdcEWMiJqvoKLKhQrvzGqo/yBGQUwIDAQAB";

        byte[] decode = Base64.getDecoder().decode(key);

        try {
            RSAPublicKey rsaPublicKey = RSAPublicKeyImpl.newKey(decode);
        System.out.println(order);
            if (verifyToken(token, rsaPublicKey)){
            } else {
        System.out.println("Could not authorize with this keyu=");
            }
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        }

    }


    public boolean verifyToken(String token, RSAPublicKey publicKey){
        try {
            Algorithm algorithm = Algorithm.RSA256(publicKey, null);
            JWTVerifier verifier = JWT.require(algorithm)
                    .build();
            verifier.verify(token);
            return true;
        } catch (Exception e){
            System.out.println("Exception in verifying "+e.toString());
            return false;
        }
    }

}
