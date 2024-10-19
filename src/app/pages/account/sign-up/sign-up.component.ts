import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../../../my-core/serivce/api-service.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {

  constructor(private service: ApiServiceService) {

  }

  ngOnInit(): void {
    this.getFields();
  }


  fields = [
    {
      id: 1,
      label: 'شماره همراه',
      errorMessage: 'شناسه وارد شده صحیح نیست',
      tooltip: 'شماره همراه خود را که در سامانه ثبت کرده ايد وارد نماييد',
      minLength: '3',
      maxLength: '40',
      formControl: new FormControl('', [Validators.required, Validators.pattern('')]),
      required: true,
      icon: '',
      type: 'text',
    },
    {
      id: 2,
      label: 'نام کاربری',
      errorMessage: 'نام کاربری باید شامل حروف کوچک انگلیسی باشد',
      tooltip: 'ورودی مورد نظر باید شامل حروف کوچک انگلیسی باشد',
      minLength: '5',
      maxLength: '15',
      formControl: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z])([a-zA-Z0-9.]){5,30}$')]),
      required: true,
      icon: '',
      type: 'text',
    },
    {
      id: 3,
      label: 'نام',
      errorMessage: 'نام وارد شده باید فارسی باشد و طول آن حداقل 2 و حداکثر 30  ...',
      tooltip: 'نام را وارد نمایید',
      minLength: '2',
      maxLength: '30',
      formControl: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      required: true,
      icon: '',
      type: 'text',
    },
    {
      id: 4,
      label: 'نام خانوادگی',
      errorMessage: 'نام خانوادگی وارد شده باید فارسی باشد و طول آن حداقل 2 ...',
      tooltip: 'نام خانوادگی را وارد نمایید',
      minLength: '2',
      maxLength: '30',
      formControl: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      required: true,
      icon: '',
      type: 'text',
    },
    {
      id: 5,
      label: 'رمز عبور',
      errorMessage: 'رمز عبور وارد شده قابل قبول نیست.',
      tooltip: 'مقدار رمز عبور باید حداقل 8 رقم و حداکثر 20 رقم که ترکیبی از حروف کوچک، حروف بزرگ، عدد و حروف ویژه ( نظیر ! یا @ یا # و....) باشد.',
      minLength: '8',
      maxLength: '50',
      formControl: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!&-_+=()])(?=\\S+$).{8,20}$')]),
      required: true,
      icon: 'visibility',
      type: 'password',
    },
    {
      id: 6,
      label: 'تکرار کلمه عبور',
      errorMessage: 'تکرار رمز عبور یکسان نمی باشد',
      tooltip: 'مقدار رمز عبور باید حداقل 8 رقم و حداکثر 20 رقم که ترکیبی از حروف کوچک، حروف بزرگ، عدد و حروف ویژه ( نظیر ! یا @ یا # و....) باشد.',
      minLength: '8',
      maxLength: '50',
      formControl: new FormControl('', [Validators.required, Validators.pattern('')]),
      required: true,
      icon: 'visibility',
      type: 'password',
    },
  ];

  getFields() {
    this.service.get('sign-up').subscribe(res => {
      if (res && res.form) {

        console.log('fields=>', res.form.fields);
        res.form.fields.forEach((element: any) => {

        });
      }
    }, er => {
      console.log(er.message);
    })
  }

}
