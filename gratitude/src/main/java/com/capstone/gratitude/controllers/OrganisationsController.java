package com.capstone.gratitude.controllers;

import com.capstone.gratitude.models.Organisation;
import com.capstone.gratitude.repositories.OrganisationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class OrganisationsController {
    
    @Autowired
    OrganisationRepository organisationRepository;


    //INDEX
    @GetMapping(value = "/organisations")
    public ResponseEntity<List<Organisation>> getAllOrganisations() {
        return new ResponseEntity<>(organisationRepository.findAll(), HttpStatus.OK);
    }

    //SHOW
    @GetMapping(value = "/organisations/{id}")
    public ResponseEntity<Optional<Organisation>> getOrganisation(@PathVariable Long id){
        return new ResponseEntity<>( organisationRepository.findById(id), HttpStatus.OK);
    }

    //CREATE
    @PostMapping(value = "/organisations")
    public ResponseEntity<Organisation> postOrganisation(@RequestBody Organisation organisation){
        organisationRepository.save(organisation);
        return new ResponseEntity<>(organisation, HttpStatus.CREATED);
    }

    //DELETE
    @DeleteMapping(value = "/organisations/{id}")
    public ResponseEntity<Long> deleteOrganisation(@PathVariable Long id) {
        organisationRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.GONE );
    }

    //UPDATE
    @PutMapping(value = "/organisations/{id}")
    public ResponseEntity<Optional<Organisation>> updateOrganisation(@PathVariable Long id, @RequestBody Organisation organisation) {
        organisationRepository.save(organisation);
        return new ResponseEntity<>(organisationRepository.findById(id), HttpStatus.OK);
    }


}
