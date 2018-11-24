import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isBusy = false;
  login: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  submit() {
    this.auth
      .login(this.login.value)
      .subscribe(
        () => {
          // redirect dashboard
          this.userService.get().subscribe(users => console.log(users));
        },
        error => {
          // mostrar mensagem pro usuário
        }
      );
  }

}
