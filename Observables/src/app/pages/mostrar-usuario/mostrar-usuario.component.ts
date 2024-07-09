import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/share/usuario.service';

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit 
{

  constructor(public apiService: UsuarioService, private toast: ToastrService) 
  {
    this.apiService.usuario = null;
  }

  mostrarUsuario()
  {
    
    this.apiService.getUsuario().subscribe((resp:Respuesta) => 
    {    
      console.log(resp)
      if (resp.error)
      {
        this.toast.warning("El usuario no existe.", "", 
                            {timeOut: 2000, positionClass:'toast-top-center'});
      }
      else
        this.apiService.usuario = resp.data;
    }   
    )
    
  }  
  
  ngOnInit(): void 
  {
  }

}
