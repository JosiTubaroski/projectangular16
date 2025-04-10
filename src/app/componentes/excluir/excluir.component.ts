import { Component, Inject, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Funcionario } from 'src/app/models/Funcionarios';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss']
})
export class ExcluirComponent implements OnInit {

  inputdata: any;
  funcionario!: Funcionario;

  constructor(
    private FuncionarioService: FuncionarioService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref:MatDialogRef<ExcluirComponent>
  ){}

  ngOnInit(): void {
    this.inputdata = this.data;

    this.FuncionarioService.GetFuncionario(this.inputdata.id).subscribe((data) => {
       this.funcionario = data.dados;

    });
      
  }

  Excluir(){
    this.FuncionarioService.ExcluirFuncionario(this.inputdata.id).subscribe((data) => {
        this.ref.close();
        window.location.reload();
    })

    
  }

  Cancelar(){
    this.ref.close();
  }

}
