import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user: FormGroup;

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
      this.userService.create(this.user.value).subscribe(user => console.log(user));
      // this.userService.get().subscribe(value => console.log(value));
    }
  }

}
