<template>
    <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column label="操作">
            <template scope="scope">
                <el-button  @click="handleView(scope.$index, scope.row.id)" type="text" size="small">查看</el-button>
                <el-button id="id" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    const tableData = [{
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
    }, {
        id: '2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    }, {
        id: '3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
    }, {
        id: '4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
    }];
    export default {
        name: 'list',
        data() {
            return {
                tableData
            }
        },
        methods: {
            handleView(index, row) {
                console.log(index, row);
            },
        }
    }
</script>