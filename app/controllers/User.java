package controllers;

/*
 * This is the controller that manages the User.  Refer to the routes file
 * to see how it is used
 */


import com.google.gson.JsonObject;
import models.UserModel;
import play.libs.Crypto;
import play.mvc.Controller;
import play.mvc.Scope;

import java.util.List;

public class User extends Controller {

    public static void create(String email, String password) throws Exception {
        JsonObject responseObject = new JsonObject();
        // Save the user to the database
        UserModel user = new UserModel(email,password);
        user.save();

        responseObject.addProperty("MESSAGE", "Success");
        renderJSON(responseObject.toString());
    }

    public static void login(String email, String password) throws Exception {
        String passwordHash = Crypto.passwordHash(password);
                List <UserModel> users = UserModel.find("email = ? AND password = ?", email, passwordHash).fetch();
        JsonObject responseObject = new JsonObject();
        if(users.size() > 0) {
            // The user should login
            UserModel user = users.get(0);
            session.put("userId",user.id);
            session.put("email",user.email);
            responseObject.addProperty("MESSAGE", "Success");
        } else {
            // The email and password combination doesn't exist
            responseObject.addProperty("ERROR", "Incorrect email or password");
        }

        renderJSON(responseObject.toString());
    }

    public static void isLoggedIn() throws Exception {
        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("IS_LOGGED_IN", isUserLoggedIn());
        renderJSON(responseObject.toString());
    }

    public static boolean isUserLoggedIn() throws Exception {
        return session.contains("userId");
    }

    public static String getUserId() throws Exception {
        return session.get("userId");
    }

    public static String getUserEmail() throws Exception {
        return session.get("email");
    }
}
