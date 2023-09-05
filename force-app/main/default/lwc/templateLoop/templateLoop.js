import { LightningElement } from 'lwc';

export default class TemplateLoop extends LightningElement {

    carList=["ferrari","ford","Mercedes","BMW"]
    
    ceoList = [
        {
            id: 1,
            name: 'sundar Pichai',
            company: 'Google'
        },
        
        {
            id: 2,
            name: 'Jeff Bezos',
            company: 'Amazon'
        },
        

        {
            id: 3,
            name: 'Mark Zeckberg',
            company: 'Facebook'
        },

        {
            id: 4,
            name: 'Ravi kumar',
            company: 'Cognizant'
        }
    ]

}