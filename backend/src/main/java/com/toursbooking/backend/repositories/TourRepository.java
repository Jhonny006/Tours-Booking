package com.toursbooking.backend.repositories;

import com.toursbooking.backend.models.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Permite realizar operaciones CRUD en la base de datos
@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {
}