import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  tituloPagina = "Registro del Cliente";
  cliente = { nombre: "", password: "", telefono: "", email: "" };
  quiereContacto: boolean = false;


  constructor(private _router: Router,) { }

  ngOnInit(): void {
  }

  goInicio(): void {
    this._router.navigate([ '/inicio' ]);
  }

  registra(): void {
    alert( "Sus datos han sido guardados" );
    this._router.navigate( ["/autos"] );
  }



}
