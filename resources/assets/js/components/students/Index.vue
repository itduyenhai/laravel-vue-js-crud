<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 smxs12 >
                <v-card-title style="padding:0px;">
                    <v-btn class="primary " to="/student/add" style="margin:0px;float:right;">Add Student</v-btn>
                    <v-spacer></v-spacer>
                    <v-text-field
                    append-icon="search"
                    single-line
                    v-model="search" style="padding:16px;display:flex;"
                    ></v-text-field>
                </v-card-title>
                <template>
                    <v-data-table  v-bind:headers="headers" :items="students" v-bind:search="search" class="elevation-1">
                        <template slot="headerCell" slot-scope="props">
                            <v-tooltip bottom> 
                                <span slot="activator">
                                    {{ props.header.text }}
                                </span>
                                <span>
                                    {{ props.header.text }}
                                </span>
                            </v-tooltip>
                        </template>
                        <template slot="items" slot-scope="props">
                            <td class="text-xs-left">{{ props.item.full_name }}</td>
                            <td class="text-xs-left">{{ props.item.father_name }}</td>
                            <td class="text-xs-left">{{ props.item.email }}</td>
                            <td class="text-xs-left">{{ props.item.address }}</td>
                            <td class="text-xs-left">{{ props.item.dob }}</td>
                            <td class="text-xs-left">
                                <!-- <v-btn class="primary" small :href="'/student/edit/'+props.item.id">Edit</v-btn> -->
                                <v-btn class="primary" small :to="'/student/edit/'+props.item.id">Edit</v-btn>
                                <v-btn class="error" small :href="'/student/delete/'+props.item.id" @click.prevent="deleteStudent(props.item.id)">Delete</v-btn>
                            </td>
                        </template>
                    </v-data-table>
                </template>

            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import swal from 'sweetalert'
export default {
    data () {
        return {
            search: '',
            headers: [
            { text: 'Full Name', value: 'full Name',align: 'left' },
            { text: 'Father Name', value: 'father Name',align: 'left' },
            { text: 'Email', value: 'email',align: 'left' },
            { text: 'Address', value: 'address' ,align: 'left'},
            { text: 'DOB', value: 'dob' ,align: 'left'},
            { text: 'Actions', value: 'actions' ,align: 'left'},

            ],
            students : [ ]
        };
    },
    created: function() {
        this.getStudents();
    },
    methods: {
        getStudents : function(){
            axios.get('api/student')
            .then(response => this.students = response.data)
            .catch(error => console.log(error.response.data));
        },
        deleteStudent: function(id, index){
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this record!",
                icon: "warning",
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: true,
                dangerMode: true,
                closeModal: true,
            })
            .then(willDelete => {
                if (willDelete) {
                    axios.delete('api/student/'+id)
                    .then(res =>{
                        if(res.status == 200 && res.data.status == "success"){
                            swal("Deleted!", res.data.message, "success");
                            this.getStudents();
                        }
                    })
                    .catch(error => {
                        if(error.response.status){
                            swal("Oops!", "Seems like we couldn't delete the record", "error")
                        }
                    });  
                }
            });
        }
    }
}
</script> 
