package cn.yuly.bpm.util;

import org.springframework.beans.BeanUtils;
import org.springframework.util.Assert;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.logging.Logger;

/**
 * Created by yuliyao on 2017/3/9.
 */
public class ListUtils {

    private ListUtils() {

    }

    public static <T> List<T> copyList(Collection sourceCollection, Class<T> tClass) {
        Assert.notEmpty(sourceCollection);
        List<T> destList = new ArrayList<T>();
        for (Object sourceObject : sourceCollection) {
            try {
                T t = tClass.newInstance();
                BeanUtils.copyProperties(sourceObject, t);
                destList.add(t);
            } catch (InstantiationException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        return destList;
    }

    public static void main(String[] args) {
        Logger logger = Logger.getLogger(ListUtils.class.getName());
        assert 5>6
                : "Initialization can't be done if initialized has not been called!";
    }
}
