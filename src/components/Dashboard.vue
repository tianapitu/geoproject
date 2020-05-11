<template>
    <div style="position: relative;">
        <div style="height: 500px;position: relative; width:100%;" id="maps">
            <Graphics 
                :keyData=0
                @openGraphics="openGraphics"
            />
            <Information 
                :detailInformation="this.detailInformation"
            />

            <Maps
                :dataMaps="this.dataMaps"
                :keyData="this.keyMaps"
                :centerCoord = "this.centerCoord"
                :detailInformation = 'this.detailInformation'
                @infoData="infoData"
            />
        </div>
        <div style="width:100%;">
            <Table
                :dataMaps="this.dataMaps"
                @spesificData="passData"
            />
        </div>

    </div>
</template>

<script>
import Maps from './Maps.vue'
import data from '../data/pozzi3.json'
import Table from './Table.vue'
import Information from './Information.vue'
import Graphics from './Graphics.vue';

export default {
    components: {
        Maps,
        Table,
        Information,
        Graphics
    },
    data () {
        return{
            dataMaps : data,
            centerCoord : [],
            detailInformation: [],
            keyMaps : 0,
            keyDetail : 0,
        }
    },
    methods: {
        openGraphics(val){
          console.log(val)
          document.getElementById("mySidebarLeft").style.display = "unset";
        },
        passData(val, eye){
            this.detailInformation = []
            this.keyMaps = val
            for(var i=0; i< this.dataMaps.length; i++){
                if(this.dataMaps[i]['key'] == val){
                    this.centerCoord = this.dataMaps[i]['latLan']
                    this.detailInformation.push(this.dataMaps[i])
                    break
                }
            }
            if(eye){
                this.openNav()
            }
        },
        openNav(){
            document.getElementById("mySidebar").style.display = "unset";
        },
        infoData(val, eye){
            this.detailInformation = []
            this.keyMaps = val
            for(var i=0; i< this.dataMaps.length; i++){
                if(this.dataMaps[i]['key'] == val){
                    this.detailInformation.push(this.dataMaps[i])
                    break
                }
            }
            if(eye){
                this.openNav()
            }
        },
    },
    created: function(){
    },
    computed:{

    },
    mounted: function(){

    },
    watch:{
        centerCoord: function(){
            this.centerCoord
        },
        detailInformation : function(){
            this.detailInformation
        },
        keyMaps: function(){
            this.keyMaps
        },
        openNavGraphics: function(){
            this.openNavGraphics
        }
    }
}
</script>