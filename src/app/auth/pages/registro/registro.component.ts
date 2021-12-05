import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]]
  });

  constructor(  private fb: FormBuilder,
                private vs: ValidatorService ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
      username: 'fernando_her85'
    })

  }

  campoNoValido( campo: string ) {
    return  this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();

  }
}