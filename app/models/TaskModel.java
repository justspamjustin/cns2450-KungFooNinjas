package models;

import play.db.jpa.Model;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class TaskModel extends Model {

    public Long ownerId;
    public Date createdDate;

    public String taskName;
    public String detailedDescription;
    public Date dueDate;
    public Date reminderDate;
    public Boolean completed;

    public TaskModel(Long ownerId, String taskName, Date createdDate, Date dueDate, Date reminderDate, String detailedDescription, Boolean completed) {
        this.ownerId = ownerId;
        this.taskName = taskName;
        this.createdDate = createdDate;
        this.dueDate = dueDate;
        this.reminderDate = reminderDate;
        this.detailedDescription = detailedDescription;
        this.completed = completed;
    }
}
