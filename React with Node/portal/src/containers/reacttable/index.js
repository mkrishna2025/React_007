import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class Demo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            columns: [{
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
              }, {
                Header: 'Age',
                accessor: 'age',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
              }, {
                id: 'friendName', // Required because our accessor is not a string
                Header: 'Friend Name',
                accessor: d => d.friend.name // Custom value accessors!
              }, {
                Header: props => <span>Friend Age</span>, // Custom header components!
                accessor: 'friend.age'
              }],
            data: []
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.setState({
                data: [{
                    name: 'Tanner Linsley',
                    age: 26,
                    friend: {
                      name: 'Jason Maurer',
                      age: 23,
                    }
                  }],
                isLoading: false
            }) 
        }, 5000);
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

