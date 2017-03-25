package cn.yuly.bpm.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.activiti.engine.IdentityService;
import org.activiti.engine.identity.Group;
import org.activiti.engine.identity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yuliyao on 2017/3/3.
 */
@Controller
public class LoginController {

    @Autowired
    private IdentityService identityService;

    @RequestMapping("/")
    public String index(HttpSession session) {
        if (session.getAttribute("user") != null) {
            return "index";
        }
        return "login";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @RequestMapping("/logon")
    public String logon(HttpServletRequest request, HttpSession session, String userName, String password) {
        boolean checkPassword = identityService.checkPassword(userName, password);
        if (checkPassword) {
            User user = identityService.createUserQuery().userId(userName).singleResult();
            session.setAttribute("user", user);

            List<Group> groups = identityService.createGroupQuery().groupMember(user.getId()).list();
            session.setAttribute("groups", groups);
            return "index";
        } else {
            request.setAttribute("error", true);
            return "login";
        }
    }

    public static void main(String[] args) throws JsonProcessingException {
        String[] column1 = new String[]{"物料名称", "物料编码", "单价", "北京", "重庆"};
        String[] column2 = new String[]{"单页", "BM001", "1", "100", "1000"};
        String[] column3 = new String[]{"堆头", "BM002", "2", "200", "200"};
        String[] column4 = new String[]{"展架", "BM003", "3", "300", "3000"};
        String[] column10 = new String[]{"寄送地址", "", "", "北京市朝阳区", "重庆市火锅区"};
        String[] column11 = new String[]{"联系人", "", "", "群众", "13322331112"};
        String[] column12 = new String[]{"联系方式", "", "", "平民", "18822332211"};
        Map map = new HashMap<>();
        map.put("table.column1", column1);
        map.put("table.column2", column2);
        map.put("table.column3", column3);
        map.put("table.column4", column4);
        map.put("table.column10", column10);
        map.put("table.column11", column11);
        map.put("table.column12", column12);
        ObjectMapper objectMapper = new ObjectMapper();
        System.out.println(objectMapper.writeValueAsString(map));

    }
}
