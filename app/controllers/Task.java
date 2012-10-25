package controllers;

import com.google.gson.*;
import models.TaskModel;
import play.libs.IO;
import play.mvc.Controller;

import java.util.Date;
import java.util.List;

public class Task extends Controller {
    public static void create() throws Exception {
        String requestString = IO.readContentAsString(request.body);
        Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
        JsonParser jsonParser = new JsonParser();
        JsonObject json = jsonParser.parse(requestString).getAsJsonObject();
        json.remove("id");
        TaskModel taskModel = gson.fromJson(json,TaskModel.class);

        String currentUserIdString = User.getUserId();
        taskModel.ownerId = Long.parseLong(currentUserIdString);
        taskModel.createdDate = new Date();
        taskModel.completed = false;
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

    public static void delete(Long id) throws Exception {
        TaskModel.delete("id = ?", id);
        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("MESSAGE", "Success");
        renderJSON(responseObject.toString());
    }

    public static void edit(Long id) throws Exception {
        String requestString = IO.readContentAsString(request.body);
        Gson gson = new GsonBuilder().setDateFormat("MMM dd, yyyy hh:mm:ss a").create();
        JsonParser jsonParser = new JsonParser();
        JsonObject json = jsonParser.parse(requestString).getAsJsonObject();
        json.remove("id");
        TaskModel requestTaskModel = gson.fromJson(json, TaskModel.class);
        TaskModel taskModel = TaskModel.findById(id);
        if(requestTaskModel.taskName != null) {
            taskModel.taskName = requestTaskModel.taskName;
        }
        if(requestTaskModel.detailedDescription != null) {
            taskModel.detailedDescription = requestTaskModel.detailedDescription;
        }
        if(requestTaskModel.dueDate != null) {
            taskModel.dueDate = requestTaskModel.dueDate;
        }
        if(requestTaskModel.reminderDate != null) {
            taskModel.reminderDate = requestTaskModel.reminderDate;
        }
        if(requestTaskModel.completed != null) {
            taskModel.completed = requestTaskModel.completed;
        }
        taskModel.save();
        renderJSON(taskModel);
    }

    
}
