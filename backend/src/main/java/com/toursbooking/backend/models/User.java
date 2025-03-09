package com.toursbooking.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.management.relation.Role;
import java.util.Set;

@Entity
@Table(name ="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, unique = true) //indica que no puede sernullo, debe ser unico en la base de datos
    private String username;

    @Column(nullable = false) //no debe ser nulo, debe llevar un valor
    private String password;

    @ElementCollection(targetClass = Role.class, fetch = FetchType.EAGER) //la base de datos el campo roles no es una entidad sino una coleccion de valores relacionados cone l usuario
    @Enumerated(EnumType.STRING)
    @CollectionTable(name = "user_roles", joinColumns = @JoinColumn (name = "user_id"))
    private Set<Role> roles;
//targetClass = Role.class: Se especifica que los elementos de la colección son de tipo Role (una enumeración o clase que representa los roles del usuario).
//fetch = FetchType.EAGER: Esto indica que los roles del usuario se deben cargar de inmediato cuando se cargue el usuario (en lugar de ser cargados de manera perezosa, cuando se necesiten). Esto mejora el rendimiento si los roles se usan con frecuencia al cargar la información del usuario.
//Esto significa que el campo roles es una colección de objetos Role (probablemente una enumeración), que están asociados con el usuario. Cada usuario puede tener uno o más roles.
 //   @CollectionTable: Esta anotación define la tabla de la base de datos que almacenará la colección de roles.
   // name = "user_roles": Especifica que la tabla en la base de datos donde se almacenarán los roles se llamará user_roles.
     //       joinColumns = @JoinColumn(name = "user_id"): Especifica la columna que se utilizará para hacer la relación entre la tabla de los usuarios y la tabla de roles. El user_id será la clave foránea que relaciona un rol con un usuario.
}
