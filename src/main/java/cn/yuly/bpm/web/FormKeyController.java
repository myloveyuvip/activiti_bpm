package cn.yuly.bpm.web;

import cn.yuly.bpm.domain.PagerBean;
import cn.yuly.bpm.domain.ProcessDefinitionDomain;
import cn.yuly.bpm.util.ListUtils;
import org.activiti.engine.RepositoryService;
import org.activiti.engine.repository.ProcessDefinition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by yuliyao on 2017/3/8.
 */
@Controller
@RequestMapping("/formKey")
public class FormKeyController {

    @Autowired
    private RepositoryService repositoryService;

    @RequestMapping("/page/processList")
    public String pageProcessList() {
        return "formkey/process-list";
    }

    @RequestMapping("/processList")
    @ResponseBody
    public PagerBean processList() {
        List<ProcessDefinition> processDefinitions = repositoryService.createProcessDefinitionQuery().list();
//        String str = JSON.toJSONString(processDefinitions);
//        System.out.println(str);
        List<ProcessDefinitionDomain> definitionDomains = ListUtils.copyList(processDefinitions, ProcessDefinitionDomain.class);

        PagerBean pagerBean = new PagerBean();
        pagerBean.setRows(definitionDomains);
        pagerBean.setTotal(definitionDomains.size());
        return pagerBean;
        /*JsonProcessDefinitionConverter converter = new JsonProcessDefinitionConverter();
        System.out.println(converter.toJson(processDefinitions.get(0)));
        return processDefinitions;*/
    }
}
