import { Component, OnInit } from '@angular/core';
import { CompendiumService } from '../../servicos/compendium.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent implements OnInit{
  constructor(private comp: CompendiumService){};
  ngOnInit(): void {
      this.comp.getAllPersonas().subscribe((data: any)=>{
          console.log(data);
          this.personas = data;
      });
  }
  personas:any = '';
}
