<template>
    <div>
        <div class="search-area">
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
        </div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="test_name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="test_age" label="年龄" width="180"></el-table-column>
            <el-table-column prop="test_phone" label="电话"></el-table-column>
            <el-table-column prop="test_sex" label="性别"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button  type="text" size="small">查看</el-button>
                    <el-button id="id" type="text" size="small">编辑</el-button>
                    <el-button  type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                :current-page="currentPage"
                :page-size="5"
                layout="total, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import 'whatwg-fetch';
import { mapActions, mapState } from 'Vuex'

export default {
    name: 'studentList',
    data() {
        return {
            name: '',
            age: '',
            total: 0,
            // tableData: [],
            currentPage: 1,
        }
    },
    computed: mapState({
        num: state => state.num,
        tableData: state => state.tableData
    }),
    methods: mapActions([ 'getListActions' ]),
    created() {
        this.getListActions({page: 1, name: ''})
    }
    // mounted() {
    //     this.getListActions()
    // }
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