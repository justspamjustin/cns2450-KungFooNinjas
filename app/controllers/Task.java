package controllers;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import models.TaskModel;
import play.data.binding.ParamNode;
import play.mvc.Controller;

import java.util.Date;
import java.util.List;

public class Task extends Controller {
    public static void create(String taskName, String detailedDescription,Date dueDate, Date reminderDate) throws Exception {
        String currentUserIdString = User.getUserId();
        Long currentUserId = Long.parseLong(currentUserIdString);
        Date creationDate = new Date();
        Boolean completed = false;
        TaskModel taskModel = new TaskModel(currentUserId,taskName,creationDate,dueDate,reminderDate,detailedDescription, completed);
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
