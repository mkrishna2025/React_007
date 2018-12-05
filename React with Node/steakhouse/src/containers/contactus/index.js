import React from 'react';
import MasterScreen from '../../components/master';

export default class Footer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { key: 'Store location', value: '32 Morbi Suscipit Semquis Aliquet Consequat, 1234' },
                { key: 'Store hours', value: 'Monday to Sunday : 10:30am - 9:30pm' },
                { key: 'Reservation Number', value: '(864) 232-3706' },
                { key: 'Office Phone Number', value: '(864) 232-3553' },
                { key: 'Fax Number', value: '(864) 232-4160' },
                { key: 'Email', value: 'emailus@companyname.com' },
            ]
        }
    }
    render(){
        /*var rows = [];
        for(var item of this.state.data){
            rows.push(<tr>
                    <td><span>{item.key}</span></td>
                    <td>:{item.value}</td>
                </tr>);
        }*/
        return (
            <MasterScreen>
                <div id="body">
                    <div class="content">
                        <div class="body">
                        <h2>CONTACT US</h2>
                        <ul>
                            <li>
                            <h4> This website template has been designed by free website templates for you, for free. You can replace all this text with your own text. </h4>
                            <p> You can remove any link to our website from this website template, you're free to use this website template without linking back to us. If you're having problems editing this website template, then don't hesitate to ask for help on the Forum. </p>
                            </li>
                        </ul>
                        <table>
                           {
                                this.state.data.map(item => 
                                <tr>
                                    <td><span>{item.key}</span></td>
                                    <td>:{item.value}</td>
                                </tr>
                            )
                        }
                        </table>
                        </div>
                    </div>
                    </div>
            </MasterScreen>
        );
    }
}