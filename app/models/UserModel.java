package models;

import play.db.jpa.Model;
import play.libs.Crypto;

import javax.persistence.Column;
import javax.persistence.Entity;

/**
 * The User Model to hold the user data represented in the database
 */

// Entity annotation means that this is a persistent object

@Entity
public class UserModel extends Model {
    // The email needs to be unique in the database
    @Column(unique=true)
    public String email;
    public String password;

    public UserModel(String email, String password) {
        this.email = email;
        this.password = Crypto.passwordHash(password);
    }
}
