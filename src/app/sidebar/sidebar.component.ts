import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('drawer') drawer!: MatDrawer;

  options: string[] = ['Usuarios'];
  image='';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.toogleSidebar();
  }

  toogleSidebar() {
    this.drawer.toggle();
  }

  async capturarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });

    this.image = `data:image/jpeg;base64,${image.base64String}`;
  }

}
