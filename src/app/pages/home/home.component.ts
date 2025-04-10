import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/Funcionarios';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/componentes/excluir/excluir.component';

@Component({
  selector: 'app-home16',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  funcionarios: Funcionario[] = [];
  funcionariosGeral: Funcionario[] = [];

  colunas = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Acoes', 'Exluir']
funcionario: any;

  constructor( private FuncionarioService: FuncionarioService, public dialog: MatDialog){}

  ngOnInit(): void {

    this.FuncionarioService.GetFuncionarios().subscribe(data => {

              const dados = data.dados;

              dados.map((item) => {
                item.dataDeCriacao = new Date(item.dataDeCriacao!).toLocaleDateString('pt-BR')
                item.dataAlteracao = new Date(item.dataAlteracao!).toLocaleDateString('pt-BR')
                
              });

               this.funcionarios = data.dados;
               this.funcionariosGeral = data.dados;


             })

             
    
      
  }

  search(event : Event){
     
     const target = event.target as HTMLInputElement;
     const value = target.value.toLowerCase();
     
     this.funcionarios = this.funcionariosGeral.filter(funcionario => 
     {
      return funcionario.name.toLowerCase().includes(value);
     }
     )
  }

  OpenDialog(id: number){
    this.dialog.open(ExcluirComponent, {
      width: '450px',
      height: '450px',
      data: {
        id : id 
      }      
    });

  }

}
