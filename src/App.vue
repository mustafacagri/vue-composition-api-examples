<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9">
                <router-view></router-view>
            </div><!-- col-md-9-->
            <div class="col-md-3">
                <div class="mainbox">
                    <div class="title"><i class="fas fa-network-wired"></i> Example Components</div>
                    <div class="content">
                        <ul id="Sidebar">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/option-based">Options-Based API</router-link></li>
                            <li><router-link to="/composition">Composition API</router-link></li>
                            <li><router-link to="/reusable-composition">Reusable Composition API</router-link></li>
                        </ul>
                    </div>
                </div><!-- mainbox-->
            </div><!-- col-md-3-->
        </div><!-- row-->
    </div><!-- container-fluid-->
  
</template>

<style lang="scss">
</style>
