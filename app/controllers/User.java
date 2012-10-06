package controllers;

/*
 * This is the controller that manages the User.  Refer to the routes file
 * to see how it is used
 */


import com.google.gson.JsonObject;
import models.UserModel;
import play.mvc.Controller;

public class User extends Controller {

    public static void create(String email, String password) throws Exception {
        JsonObject object = new JsonObject();
        // Save the user to the database
        UserModel user = new UserModel(email,password);
        user.save();

        object.addProperty("MESSAGE","Success");
        renderJSON(object.toString());
    }

}
