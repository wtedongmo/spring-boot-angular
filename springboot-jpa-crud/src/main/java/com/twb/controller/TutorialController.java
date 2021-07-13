package com.twb.controller;

import com.twb.exception.ResourceNotFoundException;
import com.twb.model.Tutorial;
import com.twb.repository.TutorialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/tutorials")
public class TutorialController {

    @Autowired
    private TutorialRepository tutorialRepository;

    @GetMapping
    public ResponseEntity<List<Tutorial>> getAllTutorials(@RequestParam(required = false) String title) {
        List result = StringUtils.isEmpty(title) ? tutorialRepository.findAll(): tutorialRepository.findByTitleContaining(title);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tutorial> getTutorialById(@PathVariable("id") long id) throws ResourceNotFoundException {
        Tutorial result = tutorialRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Tutorial "+id+" not found"));
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<Tutorial> createTutorial(@RequestBody Tutorial tutorial) throws URISyntaxException {
        Tutorial result = tutorialRepository.save(tutorial);
        return ResponseEntity.created(new URI("/api/v1/tutorials" + result.getId())).body(result);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tutorial> updateTutorial(@PathVariable("id") long id, @RequestBody Tutorial tutorial)
            throws ResourceNotFoundException {
        Tutorial tutorialEnt = tutorialRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tutorial not found for this id :: " + id));

        final Tutorial updatedEmployee = tutorialRepository.save(tutorial);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteTutorial(@PathVariable("id") long id) throws ResourceNotFoundException {
        Tutorial tutotial = tutorialRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tutorial not found for this id :: " + id));

        tutorialRepository.delete(tutotial);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/published")
    public ResponseEntity<List<Tutorial>> findByPublished(@RequestParam boolean published) {
        List result = tutorialRepository.findByPublished(published);
        return ResponseEntity.ok(result);
    }

}