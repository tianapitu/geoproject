<template class="text-left">
    <div class="text-left" style="font-size:14px;">
        <vue-bootstrap4-table
            :classes="classes"
            :rows="rows" 
            :columns="columns" 
            :config="config"
            >
                <template slot="refresh-button-text">
                    <i class="fa fa-refresh"></i> Refresh
                </template>
                <template slot="reset-button-text">
                    <i class="fa fa-undo"></i> Reset
                </template>
                <template slot="key" style="width:100px;" slot-scope="props">
                    <div style="width:100px;">
                        <button type="button" class="btn btn-outline-primary btn-sm" @click='spesificData(props.cell_value, true)'>
                            <i class="fa fa-eye"></i>
                        </button> &nbsp;
                        <button type="button" class="btn btn-outline-secondary btn-sm" @click='spesificData(props.cell_value, false)'>
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </template>
        </vue-bootstrap4-table>
    </div>
</template>
<script>
    import VueBootstrap4Table from 'vue-bootstrap4-table'


    export default {
        props: ['dataMaps', 'username'],
        data: function() {
            return {
                rows: this.dataMaps,
                columns: [
                    {
                        label: "Province",
                        name: "provincia",
                        filter: {
                            type: "simple",
                            placeholder: "search"
                        },
                        sort: true,
                    },
                    {
                        label: "Geothermal Field Name",
                        name: "camploc",
                        filter: {
                            type: "simple",
                            placeholder: "search"
                        },
                        sort: true,
                    },
                    {
                        label: "Administrative Location",
                        name: "entitam",
                        filter: {
                            type: "simple",
                            placeholder: "search"
                        },
                        sort: true,
                    },
                    {
                        label: "Name",
                        name: "nome",
                        filter: {
                            type: "simple",
                            placeholder: "search"
                        },
                        sort: true,
                    },
                    {
                        label: "Elevation",
                        name: "quota",
                        filter: {
                            type: "simple",
                            placeholder: "search"
                        },
                        sort: true,
                    },
                    {
                        label: "Date",
                        name: "datacomp",
                        filter: {
                            type: "simple",
                            placeholder: "search"
                        },
                        sort: true,
                    },
                    {
                        label: "Actions",
                        name: "key",
                    },
                ],

                config: {
                    rows_selectable: true,
                    card_title: "Pozzi Geothermal Data",
                    pagination_info: true, // default true
                    num_of_visibile_pagination_buttons: 7, // default 5
                    per_page: 20, // default 10,
                    per_page_options: [10, 20, 30, 40, 50],
                    multi_column_sort: true,
                },
                classes: {
                    tableWrapper: "outer-table-div-class wrapper-class-two text-left",
                    table : {
                        
                    },
                    row : {
                        
                    },
                    cell : {
                        "text-left": true,                        
                        "text-center": false,
                    }
                }
                           
            }
        },
        components: {
            VueBootstrap4Table
        },

        methods: {
            spesificData(val, eye) {
                this.$emit('spesificData', val, eye)
            },
        },
        mounted(){
        }
    }
</script>
<style>
.left{
    text-align:left !important;
}
</style>