import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //storing valuees
    correctAnswers=0 //show correct ans count

    myQuestions=[
        {
            id:"Question1",
            question:"Developer Tools required to work on LWC?",
            answers:{
                a:"Eclipse",
                b:"Developer Console",
                c:"VS Code",
                d:"Workbench"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"What’s the annotation used to invoke an Apex method imperatively from LWC?",
            answers:{
                a:"@future",
                b:"@isTest",
                c:"@AuraEnabled",
                d:"@cacheable"
            },
            correctAnswer:"c"
        },
        {
            id:"Question3",
            question:"What’s the annotation used to wire an Apex method to a property or function in LWC?",
            answers:{
                a:"@future",
                b:"@AuraEnabled(cacheable=true)",
                c:"@AuraEnabled",
                d:"@cacheable"
            },
            correctAnswer:"b"
        },
        {
            id:"Question4",
            question:"What are the maximum no of components that we can include in an LWC?",
            answers:{
                a:"9",
                b:"15",
                c:"100",
                d:"No Limit"
            },
            correctAnswer:"d"
        }

    ]

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    changeHandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)

        const{name,value}=event.target //explained below
        //const name = event.target.name
        //const value = event.target.value
        this.selected = {...this.selected, [name]:value}
        //this.selected={"question1":"a"}
    }
    submitHandler(event){
        

    }
    resetHandler(event){

    }
}