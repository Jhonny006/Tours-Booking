package com.toursbooking.backend.controllers;

import com.toursbooking.backend.models.Tour;
import com.toursbooking.backend.repositories.TourRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//Define la clase como un controlador de API
@RestController
@RequestMapping("/api/tours")
public class TourController {
    private final TourRepository tourRepository;

    public TourController(TourRepository tourRepository) {
        this.tourRepository = tourRepository;
    }

    @GetMapping
    public List<Tour> getAllTours() {
        return tourRepository.findAll();
    }
    //Regresa la lista de tours desde la base de datos

    @PostMapping
    public Tour createTour(@RequestBody Tour tour) {
        return tourRepository.save(tour);
    }
}
//Permite crear un nuevo tour enviando datos en formato JASON