import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../_services/profile.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  form: any = {};
  username: string;
  isLoggedIn: boolean;
  isUpdateFailed: boolean;
  isUpdated: boolean;
  errorMessage: string = '';

  constructor(
    private profileService: ProfileService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const account = this.tokenStorageService.getAccount();

      this.username = account.username;
    }
    this.profileService.read(this.username).subscribe(
      (data) => {
        this.form.fname = data.fname;
        this.form.lname = data.lname;
        this.form.linkedin = data.linkedin;
        this.form.twitter = data.twitter;
      },
      (err) => {
        this.errorMessage = err.error.message;
      }
    );
  }

  onSubmit() {
    this.form.username = this.username;
    this.profileService.update(this.form).subscribe(
      (data) => {
        this.isUpdateFailed = false;
        this.isUpdated = true;

        this.reloadPage();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isUpdateFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
