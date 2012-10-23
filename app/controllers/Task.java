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

    public static void delete(Long taskId) throws Exception {
        TaskModel.delete("id = ?", taskId);
        JsonObject responseObject = new JsonObject();
        responseObject.addProperty("MESSAGE", "Success");
        renderJSON(responseObject.toString());
    }

    public static void edit(Long id, String taskName, String detailedDescription,Date dueDate, Date reminderDate, Boolean completed) throws Exception {
        TaskModel taskModel = TaskModel.findById(id);
        if(taskName != null) {
            taskModel.taskName = taskName;
        }
        if(detailedDescription != null) {
            taskModel.detailedDescription = detailedDescription;
        }
        if(dueDate != null) {
            taskModel.dueDate = dueDate;
        }
        if(reminderDate != null) {
            taskModel.reminderDate = reminderDate;
        }
        if(completed != null) {
            taskModel.completed = completed;
        }
        taskModel.save();
        GsonBuilder builder = new GsonBuilder();
        Gson gson = builder.create();
        String jsonObject = gson.toJson(taskModel);
        renderJSON(jsonObject);
    }

    
}
