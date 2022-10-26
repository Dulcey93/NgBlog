import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPostComponent } from './components/posts/new-post/new-post.component';
import { NewPostModule } from './components/posts/new-post/new-post.module';
import { PostComponent } from './components/posts/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

/* Firebase */
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
import { AngularFireStorageModule, BUCKET} from '@angular/fire/compat/storage';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { EditPostComponent } from './components/posts/edit-post/edit-post.component';
import { EditPostModule } from './components/posts/edit-post/edit-post.module';



@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent,
    ContainerAppComponent,
    ModalComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AppRoutingModule,
    NewPostModule,
    MaterialModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    EditPostModule
  ],
  entryComponents:[
    ModalComponent
  ],
  providers: [
    { provide: BUCKET, useValue:'gs://ngblog-b2b0b.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
