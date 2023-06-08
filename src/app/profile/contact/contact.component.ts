import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public formSending = false;
  public form = {
    email: null,
    message: null
  };
  public errors = {
    email: null,
    message: null
  };
  
  constructor(
    private contactService: ContactService,
    private toastrService: ToastrService
  ) { }

  onSubmit() {
    this.formSending = true;
    this.resetErrors();
    this.showEmailSendAlert();
    this.contactService.sendEmail(this.form).subscribe(
      res => this.handleResponse(res),
      error => this.handleErrors(error)
    );
  }

  private showEmailSendAlert() {
    this.toastrService.info('Enviando correo...');
  }

  private handleResponse(res: any) {
    this.toastrService.success(res.data);
    this.formSending = false;
    this.resetForm();
  }

  private handleErrors(error: HttpErrorResponse) {
    this.errors = error.error.errors;
    this.formSending = false;
  }

  private resetForm() {
    this.form.email = null;
    this.form.message = null;
  }

  private resetErrors() {
    this.errors.email = null;
    this.errors.message = null;
  }

}
