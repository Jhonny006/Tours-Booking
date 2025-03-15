package com.toursbooking.backend.security;

import com.toursbooking.backend.models.User;
import com.toursbooking.backend.repositories.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service // Marca esta clase como un bean de Spring
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    // Inyecta UserRepository a través del constructor
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Busca el usuario en la base de datos por su nombre de usuario
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado: " + username));

        // Retorna el usuario (User implementa UserDetails, así que es compatible)
        return user;
    }
}