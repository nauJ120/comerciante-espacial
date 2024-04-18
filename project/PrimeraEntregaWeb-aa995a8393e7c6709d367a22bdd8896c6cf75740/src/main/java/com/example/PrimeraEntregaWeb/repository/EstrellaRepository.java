package com.example.PrimeraEntregaWeb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.PrimeraEntregaWeb.model.Estrella;
import com.example.PrimeraEntregaWeb.model.Planeta;

@Repository
public interface EstrellaRepository extends JpaRepository<Estrella, Long> {

    @Query("SELECT DISTINCT p FROM Estrella e JOIN e.planetas p WHERE SIZE(e.planetas) > 0")
    List<Planeta> findPlanetasinEstrellas();

    @Query(value = "SELECT *, SQRT(POWER(coordenadaX - :x, 2) + POWER(coordenadaY - :y, 2) + POWER(coordenadaZ - :z, 2)) as distancia FROM Estrella ORDER BY distancia ASC LIMIT 10", nativeQuery = true)
    List<Estrella> findNearest(@Param("x") Double x, @Param("y") Double y, @Param("z") Double z);

}
