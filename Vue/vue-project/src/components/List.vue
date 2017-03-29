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
                    <el-button type="primary" @click="onSubmit">查询</el-button>
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
                    <el-button  @click="handleView(scope.$index, scope.row.test_id)" type="text" size="small">查看</el-button>
                    <el-button id="id" type="text" size="small">编辑</el-button>
                    <el-button  @click="handleDel(scope.$index, scope.row.test_id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
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
export default {
    name: 'list',
    data() {
        return {
            name: '',
            age: '',
            total: 0,
            tableData: [],
            currentPage: 1,
        }
    },
    methods: {
        onSubmit() {
            this.getList(this.currentPage);
        },
        handleCurrentChange(val) {
            this.getList(val);
        },
        handleView(index, row) {
            console.log(index, row);
        },
        handleDel(index, row) {
           fetch('http://127.0.0.1/sellDoor/php/del.php', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: JSON.stringify({id: row})
            })
            .then( (response) => {
                return response.json()
            })
            .then((result)=>  {
                alert('删除成功！');
                this.getList(this.currentPage);
            })
            .catch((error) => {
                alert('删除失败')
            });
        },
        getList(currentPage) {
            fetch('http://127.0.0.1/sellDoor/php/list.php', {
                method: 'POST',
                headers: {'Content-Type': 'text/plain'},
                body: JSON.stringify({page: currentPage, pagesize: 5, name: this.name, age: this.age})
            })
            .then( (response) => {
                    return response.json();
                })
            .then((result)=>  {
                   this.tableData = result.list;
                   this.total = result.count;
                   this.currentPage = result.page;
            })
            .catch((error) => {
                console.log('请求失败！')
            });
        }
    },
    created() {
        this.getList(this.currentPage);
    }
}
</script>
<style type="text/css">
    .pagination {
        margin-top: 20px;
    }
</style>