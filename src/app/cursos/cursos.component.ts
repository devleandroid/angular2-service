import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
<<<<<<< HEAD
  //cursosService: = CursosService;

  constructor(private cursosService: CursosService) { 
  	//this.cursosService = new CursosService();
    this.cursosService = cursosService;
=======
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) { 
  	//this.cursosService = new CursosService();
	//this.cursosService = _cursosService;
>>>>>>> c437e140c8de691c92da30940a44f89e1ea737e3
  }

  ngOnInit() {
  	this.cursos = this.cursosService.getCursos();
  }

}
