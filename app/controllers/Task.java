package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import models.TaskModel;
import play.mvc.Controller;

import java.util.Date;
import java.util.List;

public class Task extends Controller {
    public static void create(String taskName, String detailedDescription,Date dueDate, Date reminderDate) throws Exception {
        String currentUserIdString = User.getUserId();
        Long currentUserId = Long.parseLong(currentUserIdString);
        Date creationDate = new Date();
        TaskModel taskModel = new TaskModel(currentUserId,taskName,creationDate,dueDate,reminderDate,detailedDescription);
        taskModel.save();

        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("MESSAGE", "Success");
        renderJSON(responseObject.toString());
    }

    public static void getAllTasksForUser() throws Exception {
        String currentUserIdString = User.getUserId();
        Long currentUserId = Long.parseLong(currentUserIdString);
        List<TaskModel> taskModels = TaskModel.find("ownerId = ?", currentUserId).fetch();
        GsonBuilder builder = new GsonBuilder();
        Gson gson = builder.create();
        String jsonObject = gson.toJson(taskModels);
        renderJSON(jsonObject);
    }

    
}
