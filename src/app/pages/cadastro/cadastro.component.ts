import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionarios';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {


  btnAcao = "Cadastrar!"
  btnTitulo = "Cadastrar Funcionário"

  constructor(private funcionarioService : FuncionarioService, private router: Router){

  }


  createFuncionario(funcionario: Funcionario){
     this.funcionarioService.CreateFuncionario(funcionario).subscribe((data) => {
        this.router.navigate(['/'])
     });
  }

}
