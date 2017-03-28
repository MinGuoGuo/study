<template>
    <div id="app">
        <div class="header">
            <h1>Hello Vue!</h1>
        </div>
        <div class="nav-bar">
            <el-row class="tac">
                <el-col>
                    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>导航一</template>
                            <el-menu-item-group>
                                <el-menu-item index="1-1">
                                    <router-link to="/">Welcome to vue</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-2">
                                    <router-link to="/List">人员管理</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-3">
                                    <router-link to="/counter">vuex加减法</router-link>
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                            <el-menu-item-group>
                                <el-menu-item index="2-1">选项3</el-menu-item>
                                <el-menu-item index="2-2">选项4</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                            <el-menu-item-group>
                                <el-menu-item index="3-1">选项1</el-menu-item>
                                <el-menu-item index="3-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
}
.header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #0551a7;
    text-align: center;
    z-index: 1000;
    color: #fff;
}
.nav-bar {
    height: 100%;
    width: 200px;
    position: fixed;
    top: 80px;
    left: 0;
    background: #eef1f6;;    
}
.nav-bar .el-col-3 {
    width: 12.5%;
    position: fixed;
    left: 0;
    top: 80px;
    height: 100%;
}
.content {
    margin-top: 90px;
    margin-left: 210px;
    padding: 0 10px;
}
a {
    color: #000!important;
    text-decoration: none;
}
.header .router-link-active {
    color: #20a0ff;
}
.el-menu-item.is-active a{
    color: #20a0ff!important;
}
</style>