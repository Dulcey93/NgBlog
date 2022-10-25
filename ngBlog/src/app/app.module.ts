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



@NgModule({
  declarations: [
    AppComponent,
    NewPostComponent,
    PostComponent,
    ToolbarComponent
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
  ],
  providers: [
    {provide: BUCKET, useValue:'gs://ngblog-b2b0b.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
