import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';

var instance = axios.create({
    baseURL: 'http://trainingkit.azurewebsites.net/'
  });

/*
  instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
*/


export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            columns: [
                { Header: 'Name', accessor: 'Name' },
                { Header: 'Age', accessor: 'Age' },
                { Header: 'Department', accessor: 'Department' },
                { Header: 'Gender', accessor: 'Gender' }
            ],
            data: []
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        
        /*fetch('http://trainingkit.azurewebsites.net/api/Users/GetAttendees').then(response => {
            if(response.status == 200){
                return response.json();
            }
        })
        .then(response => {
            this.setState({ data: response.data, isLoading: false });
        })
        .catch(error => {
            debugger;
        });*/

        var me = this;
        instance.get('/api/Users/GetAttendees')
        .then(function (response) {
            me.setState({ data: response.data.data, isLoading: false });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { data, columns, isLoading } = this.state; 
       
        return (
            <ReactTable
          data={data}
          columns={columns}
          pageSizeOptions= {[5, 10]}
          minRows={5}
          loading={isLoading}
          loadingText='Processing Please Wait'
          noDataText= ''
        />
        );
      }
}

