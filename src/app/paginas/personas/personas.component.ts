import { Component, OnInit } from '@angular/core';
import { CompendiumService } from '../../servicos/compendium.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit{
  constructor(private comp: CompendiumService){};

  personas:any = '';
  
  ngOnInit(): void {
      this.comp.getLink("")
      this.comp.getAllPersonas().subscribe((data: any)=>{
          console.log(data);
          this.personas = data;
      });
  }

  searchPersona(input:string){
    this.comp.getLink(`?name=${input}`);
    console.log(input);
    this.getPersona();
  }

  getPersona(){
    this.comp.getAllPersonas().subscribe((data: any)=>{
      console.log(data);
      this.personas = data;
    });
  }
}
