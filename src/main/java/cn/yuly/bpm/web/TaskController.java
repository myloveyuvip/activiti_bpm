package cn.yuly.bpm.web;

import org.activiti.engine.TaskService;
import org.activiti.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by yuliyao on 2017/3/6.
 */
@RequestMapping("/task")
@Controller
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/page/toDoTask")
    public String toDoTask(HttpServletRequest request) {
        //查询待办事项
        List<Task> taskList = taskService.createTaskQuery().taskCandidateOrAssigned(request.getSession().getId()).list();
        request.setAttribute("taskList", taskList);
        return "task/toDoTask";
    }

}
