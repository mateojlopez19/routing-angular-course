import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  formularioContacto: FormGroup
  usuarioActivo: string = 'Pedro'

  constructor( private form: FormBuilder){
    this.formularioContacto = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
    this.formularioContacto.get('nombre')?.disable()
  }

  enviar(){
    console.log(this.formularioContacto)
  }

  hasErrors( controlName: string, errorType: string){
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched
  }

}
