package com.polafix.polafix.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.polafix.polafix.pojos.Serie;

@RestController
@CrossOrigin("*")
@RequestMapping("/series")
public class SerieController {

    @Autowired
    private SerieService serieService;
    
    @GetMapping("")
    public List<Serie> getSerieByName(@RequestParam String name) {
        return serieService.getSerieByName(name);
    }

    @GetMapping("/{id}")
    public Serie getSerieById(@PathVariable Long id) {
        return serieService.getSerieById(id);
    }

    /*@GetMapping("")
    public List<Serie> getAllSeries() {
        return serieService.getAllSeries();
    }*/

    @PostMapping("")
    public Serie createSerie(@RequestBody Serie serie) {
        return serieService.createSerie(serie);
    }

    @DeleteMapping("/{name}")
    public boolean deleteSerie(@PathVariable Long id) {
        return serieService.deleteSerie(id);
    }

}
