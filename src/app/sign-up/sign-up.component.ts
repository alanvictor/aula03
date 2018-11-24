import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  feedback: Feedback;
  user: FormGroup;
  isBusy: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      email: ['', Validators.email],
      name: ['', Validators.required],
      password: ['', Validators.required/*, Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/')*/],
      passwordConfirm: ['', Validators.required]
    });
  }

  submit() {
    if (this.user.valid) {
      this.isBusy = true;
      this.userService
        .create(this.user.value)
        .pipe(
          finalize(() => this.isBusy = false)
        )
        .subscribe(
          () => {
            this.feedback = {
              type: 'success',
              title: 'Você conseguiu!',
              message: 'Seu cadastro foi efetuado com sucesso'
            };

            this.resetForm();
          },
          error => {
            this.feedback = {
              type: 'danger',
              title: 'Ops!',
              message: error.message
            };
            console.log('error', error);
          }
        );
    }
  }

  resetForm() {
    this.user.reset();
  }
}


class Feedback {
  type: string;
  title: string;
  message: string;
}
