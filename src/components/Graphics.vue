<template>
    <div>
        <div class="sidebarInformationLeft" id="mySidebarLeft" >
            <div class="container-fluid">
                <div class="row">
                    <div class="col-3" style="padding-top:50px;background-color: #363333; height: 500px;padding: 30px;color: white;">
                        <div>
                            <model-select :options="menus"
                                            v-model="regionSelected"
                                            placeholder="select regione">
                            </model-select>
                        </div>
                        <div>
                            <div class="number">
                                <div class="row" style="padding-left:15px;padding-right:15px;">
                                    <div class="text-left infoNumberLeft"><h6>Total Data</h6></div>
                                    <div class="text-right infoNumberRight"><h4>{{ selectedData.total_data }}</h4></div>
                                </div>
                                <div><md-progress-bar md-mode="determinate" :md-value="selectedData.total_data/totalData*100"></md-progress-bar></div>
                            </div>
                            <div class="number">
                                <div class="row" style="padding-left:15px;padding-right:15px;">
                                    <div class="text-left infoNumberLeft"><h6>Maximum Elevation</h6></div>
                                    <div class="text-right infoNumberRight"><h4>{{ selectedData.max_quota }}</h4></div>
                                </div>
                                <div><md-progress-bar class="md-accent" md-mode="determinate" :md-value="selectedData.max_quota/maxQuata*100"></md-progress-bar></div>
                            </div>
                            <div class="number">
                                <div class="row" style="padding-left:15px;padding-right:15px;">
                                    <div class="text-left infoNumberLeft"><h6>Minimum Elevation</h6></div>
                                    <div class="text-right infoNumberRight"><h4>{{ selectedData.min_quota }}</h4></div>
                                </div>
                                <div><md-progress-bar md-mode="determinate" :md-value="selectedData.min_quota/minQuota*100"></md-progress-bar></div>
                            </div>
                            <div class="number">
                                <div class="row" style="padding-left:15px;padding-right:15px;">
                                    <div class="text-left infoNumberLeft"><h6>Largest Depth Of Borehole</h6></div>
                                    <div class="text-right infoNumberRight"><h4>{{ selectedData.max_prof }}</h4></div>
                                </div>
                                <div><md-progress-bar class="md-accent" md-mode="determinate" :md-value="selectedData.max_prof/maxProf*100"></md-progress-bar></div>
                            </div>
                            <div class="number">
                                <div class="row" style="padding-left:15px;padding-right:15px;">
                                    <div class="text-left infoNumberLeft"><h6>Smalest Depth Of Borehole</h6></div>
                                    <div class="text-right infoNumberRight"><h4>{{ selectedData.min_prof }}</h4></div>
                                </div>
                                <div><md-progress-bar md-mode="determinate" :md-value="selectedData.min_prof/minProf*100"></md-progress-bar></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9" style="padding-top:55px;">
                        <div>
                            <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
                        </div>
                        <div style="padding-right:10px;">
                            <ApexCharts type="bar" height="350" :options="selectedData.bar.chartOptions" :series="selectedData.bar.series"></ApexCharts>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            
            </div>
        </div>
    </div>
</template>

<script>
import ApexCharts from 'vue-apexcharts';
import data from '../data/statistics.json';
import { ModelSelect } from 'vue-search-select'

export default {
    props: ['keydata'],
    components: {
        ApexCharts,
        ModelSelect,
    },
    data () {
        return{
            statistics : data,
            regionSelected : '',
            totalData: 0,
            maxQuata: 0,
            minQuota: 0,
            maxProf: 0,
            minProf: 0,
            selectedData : {
                            total_data: 0,
                            max_quota: 0,
                            min_quota: 0,
                            max_prof: 0,
                            min_prof: 0,
                            bar:
                                {
                                series: [],
                                chartOptions: {
                                        chart: {
                                                type: 'bar',
                                                height: 350,
                                                stacked: true,
                                                toolbar: {
                                                        show: true
                                                        },
                                                zoom: {
                                                        enabled: true
                                                    }
                                        },
                                        responsive: [{
                                            reakpoint: 480,
                                            options: {
                                                    legend: {
                                                    position: 'bottom',
                                                    offsetX: -10,
                                                    offsetY: 0
                                                }
                                            }
                                            }
                                        ],
                                        plotOptions: {
                                        bar: {
                                                horizontal: false,
                                            },
                                        },
                                        xaxis: {
                                                type: 'string',
                                                categories: [],
                                            },
                                        legend: {
                                                position: 'right',
                                                offsetY: 40
                                            },
                                        fill: {
                                                opacity: 1
                                        }
                                    }
                                }
                        },
            menus: [],       
        }   
    },
    methods: {
        closeNav(){
            document.getElementById("mySidebarLeft").style.display = "none";
        },
        groupBy(){
            this.dataMaps['regione']
        },
        menu(){
            var res = []
            var terra = { name: 'TERRA', data:[]}
            var marre = { name: 'MARRE', data:[]}
            var acqua_interne = { name: 'ACQUA_INTERNE', data:[]}
            var non_indicato = { name: 'NON_INDICATO', data:[]}
            for(var i=0;i<this.statistics.length; i++){
                var a  = this.statistics[i].regione
                res.push({ value: a, text: a})
                if(this.statistics[i].regione == "All"){
                    this.totalData = this.statistics[i].total
                    this.maxQuata = this.statistics[i].max_quota
                    this.minQuota = this.statistics[i].min_quota
                    this.maxProf = this.statistics[i].max_prof
                    this.minProf = this.statistics[i].min_prof
                    this.selectedData.total_data = this.statistics[i].total
                    this.selectedData.max_quota = this.statistics[i].max_quota
                    this.selectedData.min_quota = this.statistics[i].min_quota
                    this.selectedData.max_prof = this.statistics[i].max_prof
                    this.selectedData.min_prof = this.statistics[i].min_prof
                    for(var j = 0; j<this.statistics[i].sub_regione.length; j++){
                        terra.data.push(this.statistics[i].sub_regione[j].terra)
                        marre.data.push(this.statistics[i].sub_regione[j].marre)
                        acqua_interne.data.push(this.statistics[i].sub_regione[j].acqua_interne)
                        non_indicato.data.push(this.statistics[i].sub_regione[j].non_indicato)
                        this.selectedData.bar.chartOptions.xaxis.categories.push(this.statistics[i].sub_regione[j].provincia)
                    }
                    this.selectedData.bar.series.push(terra)
                    this.selectedData.bar.series.push(marre)
                    this.selectedData.bar.series.push(acqua_interne)
                    this.selectedData.bar.series.push(non_indicato)
                    //this.selectedData.push(this.statistics[i])
                }

            }
            return res
        },
        selectData(val){
            this.selectedData = {
                            total_data: 0,
                            max_quota: 0,
                            min_quota: 0,
                            max_prof: 0,
                            min_prof: 0,
                            bar:
                                {
                                series: [],
                                chartOptions: {
                                        chart: {
                                                type: 'bar',
                                                height: 350,
                                                stacked: true,
                                                toolbar: {
                                                        show: true
                                                        },
                                                zoom: {
                                                        enabled: true
                                                    }
                                        },
                                        responsive: [{
                                            reakpoint: 480,
                                            options: {
                                                    legend: {
                                                    position: 'bottom',
                                                    offsetX: -10,
                                                    offsetY: 0
                                                }
                                            }
                                            }
                                        ],
                                        plotOptions: {
                                        bar: {
                                                horizontal: false,
                                            },
                                        },
                                        xaxis: {
                                                type: 'string',
                                                categories: [],
                                            },
                                        legend: {
                                                position: 'right',
                                                offsetY: 40
                                            },
                                        fill: {
                                                opacity: 1
                                        }
                                    }
                                }
                        }
            var terra = { name: 'TERRA', data:[]}
            var marre = { name: 'MARRE', data:[]}
            var acqua_interne = { name: 'ACQUA_INTERNE', data:[]}
            var non_indicato = { name: 'NON_INDICATO', data:[]}
            for(var i=0;i<this.statistics.length; i++){
                if(this.statistics[i].regione == val){
                    this.selectedData.total_data = this.statistics[i].total
                    this.selectedData.max_quota = this.statistics[i].max_quota
                    this.selectedData.min_quota = this.statistics[i].min_quota
                    this.selectedData.max_prof = this.statistics[i].max_prof
                    this.selectedData.min_prof = this.statistics[i].min_prof
                    for(var j = 0; j<this.statistics[i].sub_regione.length; j++){
                        terra.data.push(this.statistics[i].sub_regione[j].terra)
                        marre.data.push(this.statistics[i].sub_regione[j].marre)
                        acqua_interne.data.push(this.statistics[i].sub_regione[j].acqua_interne)
                        non_indicato.data.push(this.statistics[i].sub_regione[j].non_indicato)
                        this.selectedData.bar.chartOptions.xaxis.categories.push(this.statistics[i].sub_regione[j].provincia)
                    }
                    this.selectedData.bar.series.push(terra)
                    this.selectedData.bar.series.push(marre)
                    this.selectedData.bar.series.push(acqua_interne)
                    this.selectedData.bar.series.push(non_indicato)
                }
            }
        }

    },
    created: function(){

    },
    computed:{

    },
    mounted: function(){
        this.menus = this.menu()
    },
    watch:{
        regionSelected: function(){
            this.selectData(this.regionSelected)
        },
        
    }
}
</script>
<style>
.sidebarInformationLeft{
    position: absolute;
    background-color: white;
    float: Left;
    left: 0;
    height: 500px;
    transition: 0.5s;
    width: 80%;
    top: 0;
    z-index : 10;
    display: none;
    font-size:12px;
}

.sidebarInformationLeft .closebtn {
    position: absolute;
    top: 0;
    font-size: 36px;
    padding-right:30px;
    padding-top:25px;
    right:0;
}
.md-progress-bar {
}
.number{
    margin-top: 20px;
}
.infoNumberLeft{
    align-self: flex-end;
    width: 60%;
}

.infoNumberRight{
    align-self: flex-end;
    width: 40%;
}

</style>

