import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/share/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuario.component.html',
  styleUrls: ['./insertar-usuario.component.css']
})
export class InsertarUsuarioComponent implements OnInit 
{

  public message:string

  constructor(private apiService: UsuarioService, private toast: ToastrService) 
  { 
    this.message = null;
  }


  insertarUsuario(nombre:HTMLInputElement, apellidos: HTMLInputElement)
  {
    if (nombre.value == "" || apellidos.value == "")
      this.toast.error("Falta un campo obligatorio.", "", 
                       {timeOut: 2000, positionClass:'toast-top-center'});
      
    else
    {  
      let nuevoUsuario: Usuario = new Usuario(nombre.value,apellidos.value)
      console.log(nuevoUsuario);
      
      this.apiService.postUsuario(nuevoUsuario)
      .subscribe((resp:Respuesta) =>
      {

        console.log(resp);
        
        if (!resp.error)
        {  
          this.toast.success("Usuario insertado satisfactoriamente ", "",
                            {timeOut: 2000, positionClass:'toast-top-center'});
 
          nombre.value = "";
          apellidos.value = ""; 
          this.apiService.usuario = null; 
        }
        else
          this.toast.error("El usuario ya existe", "", 
                           {timeOut: 2000, positionClass:'toast-top-center'});

      })
    }
  } 


  eliminarUsuario(id:string)
  {
    this.apiService.delUsuario({"id":id})
    .subscribe((data) =>
    {
      console.log(data);
    })

  } 
  ngOnInit(): void 
  {
  }

}
