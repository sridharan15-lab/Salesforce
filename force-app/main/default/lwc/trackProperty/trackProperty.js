import { LightningElement, track } from 'lwc';

export default class TrackProperty extends LightningElement {

    @track address={
        city:'Sydney',
        state: 'Victoria',
        country: 'Australia'

    }
    trackhandler(event){
        this.address.city = event.target.value

    }

    num1=10
    num2=20
    names=["Henry","cavil","Klark"]

    get firstname(){
        return this.names[0].toUpperCase()
    }

    get multiply(){
        return this.num1 * this.num2
    }

    isVisible = false

    handleClick(){
        this.isVisible = true
        // if (this.isVisible = true){
        //     this.isVisible = false 
        // }else{
        // this.isVisible = true
        // }
    }
    name
    changeHandler(event){
        this.name = event.target.value

    }
    get helloMethod(){
        return this.name === 'hello'
    }

} 