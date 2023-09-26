import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} //storing valuees
    correctAnswers=0 //to show correct ans count
    isSubmitted = false //to show text when submitted

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

    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? "slds-text-color_success" : "slds-text-color_error" }`
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
        event.preventDefault()
        //this.selected={"question1":"a","question2":"b"}
        //item=>"question1"["a"] === this.myQuestion."c"
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
        

    }
    resetHandler(event){
        this.isSubmitted=false
        this.correctAnswers=0
        this.selected={}

    }
}