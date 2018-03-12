import { Component } from "@angular/core";

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponet {
    name: string = "Volodymyr";
    lastName: string ="Palchinskiy";
    age:  number = 35;
    job: string = "Meneger";
    company: string = "company";

    isShowForm: boolean = false;
    showForm(){
        this.isShowForm = true;
    };
    hideForm(){
        this.isShowForm = false; 
    }

    isShowAddSkill: boolean = false;
    showAddSkill(){
        this.isShowAddSkill = true;
    };
    skills: any = ['HTML' ,'CSS' , 'JS', 'C#'];
    newSkill: string = "";
    addElement(){
        this.skills.push(this.newSkill);
    }
      

}