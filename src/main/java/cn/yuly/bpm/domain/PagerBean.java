package cn.yuly.bpm.domain;

import java.util.List;

/**
 * Created by yuliyao on 2017/3/9.
 */
public class PagerBean<E> {

    private List<E> rows;

    private long total;

    private int limit;

    private int offset;

    public List getRows() {
        return rows;
    }

    public void setRows(List rows) {
        this.rows = rows;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }
}
