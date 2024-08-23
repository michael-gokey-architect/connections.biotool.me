import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
    // title =  'Connections';
  public formGroup: FormGroup;
  public loginForm: FormGroup;
  showEmailSignUp = false;
  firsTimeLogin = false;
  hasSpecialCharacter = new RegExp(/[ [!@#$%^&*()_+-=[]{};':"|,.<>/);
  hasNumber = new RegExp(/\d/);
  showPassword = false;

  constructor(private auth: AuthService, 
    private _route: Router, 
    private userService: UserService)
    {
    if(this.auth.userToken){
      this._route.navigateByUrl('/welcome', { state:  { userType: 'old'} });
    }

    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(8)
        ])
      )
    })

    this.formGroup = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      hashed_password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(8),
          // this.regexValidator(new RegExp(/.{8,}/), {
          //   Min_8_Characters_Required: true,
          // }),
          // this.regexValidator(this.hasNumber, { Missing_Number: true }),
          // this.regexValidator(this.hasSpecialCharacter, {
          //   missSpecialCharacter: true,
          // }),
         

          // this.regexValidator(new RegExp("^[a-zA-Z]+$"), { pattern2: "false" }),
        ])
      )
    });
  }

  ngOnInit(): void {
    if(!localStorage.getItem('bio_tool_user_id')){
      this.showEmailSignUp = true
    }
    // this.initForm();
    // this.initLoginForm();
  }

  private initLoginForm(){
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(8)
        ])
      )
    })
  }

  private initForm() {
    this.formGroup = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      hashed_password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(8),
          // this.regexValidator(new RegExp(/.{8,}/), {
          //   Min_8_Characters_Required: true,
          // }),
          // this.regexValidator(this.hasNumber, { Missing_Number: true }),
          // this.regexValidator(this.hasSpecialCharacter, {
          //   missSpecialCharacter: true,
          // }),
         

          // this.regexValidator(new RegExp("^[a-zA-Z]+$"), { pattern2: "false" }),
        ])
      )
    });
  }

  private regexValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      //@ts-ignore
      return control?.value && regex.test(control.value) ? null : error;
    };
  }

  get f() {
    return this.formGroup.controls;
  }

  public onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      const creatUserData = {...this.formGroup.value, 
        username:this.formGroup.controls["email"].value, 
        organization_id:Number(localStorage.getItem('org_id'))};
      console.log(creatUserData);
      this.userService.createUser(creatUserData).subscribe(data => {
        console.log('Data-->', data);
        if(data.user_id){
          localStorage.setItem('bio_tool_user_id', data.user_id);
          alert('Account created successfully...!');
          this.auth.setUserValue(data);
          this.showEmailSignUp = false;
          this.firsTimeLogin = true;
        }
      })
    }
  }

  public onLogin(){
    console.log('On login form clicked');
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(res=>{
        
        if(res.isSuccess == true){
          alert('Logged in successfully');
          // sessionStorage.setItem('user_lit_', JSON.stringify(res.data));
          this.auth.setToken(res.data);
          if(this.firsTimeLogin){
            this._route.navigateByUrl('/welcome', { state:  { userType: 'new'} });
          }
          else this._route.navigateByUrl('/welcome', { state:  { userType: 'old'} });
        }
        else{
          alert(res.message);
        }
        
      })
    }
  }

  log() {
    console.log(this.formGroup.controls['hashed_password'].errors);
  }

  logLogin(){
    console.log(this.loginForm.controls['password'].errors)
  }

  getErrorKeys(controlName:string) {
    //@ts-ignore
    if(this.formGroup.controls[controlName].errors) return Object.keys(this.formGroup.controls[controlName].errors);
    else return [];
  }

  togglePasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

}
