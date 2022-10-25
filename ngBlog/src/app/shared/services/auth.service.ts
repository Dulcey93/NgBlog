import { Injectable } from '@angular/core';
import { UserI } from '../models/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { FileI } from '../models/file.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* Error en el Observable */
  public userData: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) { 
    this.userData = afAuth.authState;
  }

  loginByEmail(user:UserI){
    const {email, password} =user;
    this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.signOut();
  }
}
