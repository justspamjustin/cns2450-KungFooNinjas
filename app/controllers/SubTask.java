/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//Author Dan

package controllers;

import com.google.gson.*;
import models.SubTaskModel;
import play.libs.IO;
import play.mvc.Controller;

import java.util.Date;
import java.util.List;

public class SubTask extends Controller {
public static void createSubTask() throws Exception {
        String requestString = IO.readContentAsString(request.body);
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
        JsonParser jsonParser = new JsonParser();
        JsonObject json = jsonParser.parse(requestString).getAsJsonObject();
        json.remove("id");
        SubTaskModel subTaskModel = gson.fromJson(json,SubTaskModel.class);

        String currentUserIdString = User.getUserId();
        //subTaskModel.taskId = Long.parseLong(currentUserIdString);
        subTaskModel.createdDate = new Date();
        subTaskModel.completed = false;
        subTaskModel.save();

        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("MESSAGE", "Success");
        renderJSON(responseObject.toString());
    }
}
