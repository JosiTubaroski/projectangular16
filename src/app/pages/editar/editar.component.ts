import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  btnAcao: string = 'Editar!'
  btnTitulo: string = 'Editar Funcionário'
  funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
     this.funcionarioService.GetFuncionario(id).subscribe((data) => {
      this.funcionario = data.dados;
       
     })
     
    
  }

  async editarFuncionario(funcionario : Funcionario){
     this.funcionarioService.EditarFuncionario(funcionario).subscribe((data) => {
      this.router.navigate(['/'])
     })
  }

}
