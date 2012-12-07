/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

//Author Dan

package models;

import play.db.jpa.Model;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class SubTaskModel extends Model {

    public Long taskId;
    public Date createdDate;

    public String subTaskName;
    public String reminderMessage;
    public Date dueDate;
    public Date reminderDate;
    public Boolean completed;

    public SubTaskModel(Long taskId, String subTaskName, Date createdDate, Date dueDate, Date reminderDate, String reminderMessage, Boolean completed) {
        this.taskId = taskId;
	    this.subTaskName = subTaskName;
        this.createdDate = createdDate;
        this.dueDate = dueDate;
        this.reminderDate = reminderDate;
        this.reminderMessage = reminderMessage;
        this.completed = completed;
    }
}