<template>
    <div>
        <div class="sidebarInformation" id="mySidebar" >
            <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
            <div><b>Name:</b> {{  this.detail.nome }} </div>
            <div><b>Administrative Location:</b> {{ this.detail.entitam }} </div>
            <div><b>Province:</b> {{ this.detail.provincia }} </div>
            <div><b>Geothermal Field Name:</b> {{ this.detail.camploc }} </div>
            <div><b>Geoghraphical Location:</b> {{ this.detail.locgeo }} </div>
            <div><b>Region:</b> {{ this.detail.regione }} </div>
            <br/>
            <h5>Borehole Information </h5>
            <div><b>Type:</b> {{ this.detail.tipo }} </div>
            <div><b>Elevation:</b> {{ this.detail.quota }} </div>
            <div><b>Owner:</b> {{ this.detail.proprietar }} </div>
            <div><b>Completion Date:</b> {{ this.detail.datacomp }} </div>
            <div><b>Maximum Depth:</b> {{ this.detail.prof }} </div>
            <div><b>Outcome:</b> {{ this.detail.esito }} </div>
            <div><b>Scope:</b> {{ this.detail.scopo }} </div>
            <div><b>Use:</b> {{ this.detail.uso }} </div>
            <div><b>Position:</b> {{ this.detail.posizione }} </div>
            <div><b>Status:</b> {{ this.detail.stato }} </div>
        </div>
    </div>
</template>

<script>


export default {
    props: ['detailInformation'],
    data () {
        return{
            detail : {
                nome : null,
                entitam : null,
                provincia : null,
                quota : null,
                camploc : null,
                locgeo : null,
                regione : null,
                tipo : null,
                proprietar : null, 
                datacomp : null,
                prof : null,
                esito : null,
                scopo : null,
                uso : null,
                posizione : null, 
                stato : null,
            },
        }
    },
    methods: {
        closeNav(){
            document.getElementById("mySidebar").style.display = "none";
        },
    },
    created: function(){

    },
    computed:{

    },
    mounted: function(){
    },
    watch:{
        detail: function(){

        },
        detailInformation: function(){
            if(this.detailInformation[0] != null){
                this.detail.nome = this.detailInformation[0].nome
                this.detail.entitam = this.detailInformation[0].entitam
                this.detail.provincia = this.detailInformation[0].provincia
                this.detail.quota = this.detailInformation[0].quota
                this.detail.camploc = this.detailInformation[0].camploc
                this.detail.locgeo = this.detailInformation[0].locgeo
                this.detail.regione = this.detailInformation[0].regione
                this.detail.tipo = this.detailInformation[0].tipo
                this.detail.proprietar = this.detailInformation[0].proprietar
                this.detail.datacomp = this.detailInformation[0].datacomp
                this.detail.prof = this.detailInformation[0].prof
                this.detail.esito = this.detailInformation[0].esito
                this.detail.scopo = this.detailInformation[0].scopo
                this.detail.uso = this.detailInformation[0].uso
                this.detail.posizione = this.detailInformation[0].posizione
                this.detail.stato = this.detailInformation[0].stato
            }
        }


    }
}
</script>
<style>
.sidebarInformation{
    position: absolute;
    background-color: white;
    float: right;
    right: 0;
    height: 500px;
    transition: 0.5s;
    width: 20%;
    top: 0;
    z-index : 1;
    display: none;
    font-size:12px;
    padding: 30px;
    padding-top: 55px;
}

.sidebarInformation .closebtn {
  position: absolute;
  top: 0;
  font-size: 36px;
  padding-right:30px;
  padding-top:25px;
}

</style>