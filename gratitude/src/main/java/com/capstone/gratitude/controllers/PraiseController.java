package com.capstone.gratitude.controllers;

import com.capstone.gratitude.models.Praise;
import com.capstone.gratitude.repositories.PraiseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class PraiseController {
    
    @Autowired
    PraiseRepository praiseRepository;


    //INDEX
    @GetMapping(value = "/praises")
    public ResponseEntity<List<Praise>> getAllPraises() {
        return new ResponseEntity<>(praiseRepository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/praises/{id}")
    public ResponseEntity<Optional<Praise>> getPraise(@PathVariable Long id){
        return new ResponseEntity<>( praiseRepository.findById(id), HttpStatus.OK);
    }

    //CREATE
    @PostMapping(value = "/praises")
    public ResponseEntity<Praise> postPraise(@RequestBody Praise praise){
        praiseRepository.save(praise);
        return new ResponseEntity<>(praise, HttpStatus.CREATED);
    }

    //DELETE
    @DeleteMapping(value = "/praises/{id}")
    public ResponseEntity<Long> deletePraise(@PathVariable Long id) {
        praiseRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.GONE );
    }

    //UPDATE
    @PutMapping(value = "/praises/{id}")
    public ResponseEntity<Optional<Praise>> updatePraise(@PathVariable Long id, @RequestBody Praise praise) {
        praiseRepository.save(praise);
        return new ResponseEntity<>(praiseRepository.findById(id), HttpStatus.OK);
    }
}
