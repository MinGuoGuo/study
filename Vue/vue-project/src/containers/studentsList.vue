<template>
    <div>
        <!--<div class="search-area">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="姓名">
                    <el-input v-model="name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="age" placeholder="年龄"></el-input>
                </el-form-item><el-form-item>
                    <el-button type="primary">查询</el-button>
                </el-form-item>
            </el-form>
        </div>-->
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="test_name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="test_age" label="年龄" width="180"></el-table-column>
            <el-table-column prop="test_phone" label="电话"></el-table-column>
            <el-table-column prop="test_sex" label="性别"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button  type="text" size="small">查看</el-button>
                    <el-button id="id" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDel(scope.$index, scope.row.test_id)"  type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                :page-size="5"
                :total="total"
                :current-page="currentPage"
                layout="total, prev, pager, next, jumper"
                @current-change="handleCurrentChange">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'Vuex'

export default {
    name: 'studentList',
    data() {
        return {
            name: '',
            age: '',
            total: 0,
            tableData: [],
            currentPage: 1,
        }
    },
    computed: {
        ...mapGetters(['list']),
    },
    watch: {
        list() {
            console.log(this.list);
            this.tableData = this.list.list;
            this.total = this.list.total;
            this.currentPage = this.list.currentNo;
        }
    },
    methods: {
        ...mapActions(['initList', 'delList']),
        // 分页请求;
         handleCurrentChange(val) {
            console.log(val);
            this.currentPage = val;
            this.fetchInitList()
        },
        // 获取列表数据；
        fetchInitList() {
            const params = {
                page: this.currentPage, 
                pagesize: 5, 
                name: '', 
                age: ''
            }
            this.initList(params);
        },
        handleDel(index, id) {
            console.log(this.currentPage);
            const params = {
                id: {
                    id: id
                },
                list: {
                    page: this.currentPage, 
                    pagesize: 5, 
                    name: '', 
                    age: ''
                }
            } ;
            this.delList(params);
        }
    },
    created() {
       this.fetchInitList();
    }
}
</script>
<style type="text/css">
    .pagination {
        margin-top: 20px;
    }
    .cell {
        text-align: center;
    }
</style>