import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  alumno = {
    codigo: '',
    password: '',
    captchaInput: ''
  }

  procesar(){
    
  }

  /**Codigo captcha*/
  captcha: string = '';

  

  ngOnInit(): void {
    this.generateCaptcha();
  }

  generateCaptcha(): void {
    this.captcha = this.generateRandomText(4);
  }

  generateRandomText(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  /**Modal de confirmacion */
  mostrarModal: boolean = false;


  /*Contador de cupos */
  contador: number = 1200;


  /**Disminuid contador de cupos al darle click al boton reservar */
  reservar(): void {
    if (this.contador > 0 && this.alumno.codigo !== '' && this.alumno.password !== '' && this.alumno.captchaInput !== '') {
      this.contador--;

      this.mostrarModal = true;

      /**limpiar los campos de input*/
      this.alumno.codigo = '';
      this.alumno.password = '';
      this.alumno.captchaInput = '';

    }
    else
    {
      this.mostrarModal = false;
    }

  }

  
}