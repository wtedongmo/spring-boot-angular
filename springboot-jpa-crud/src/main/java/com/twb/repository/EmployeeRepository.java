package com.twb.repository;

import com.twb.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

    Optional<Employee> findByEmailId(String emailId);
    @Query("select e from Employee e where e.firstName like %:name% or e.lastName like %:name%")
    List<Employee> findAllByName(@Param("name") String name);
}
