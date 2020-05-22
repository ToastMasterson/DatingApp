import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { AdminService } from 'src/app/_services/admin.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-photo-management',
  templateUrl: './photo-management.component.html',
  styleUrls: ['./photo-management.component.css']
})
export class PhotoManagementComponent implements OnInit {
  photos: Photo[];

  constructor(private adminService: AdminService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getPendingPhotos();
  }

  getPendingPhotos() {
    this.adminService.getPendingPhotos().subscribe((photos: Photo[]) => {
      this.photos = photos;
    }, error => {
      this.alertify.error(error);
    });
  }

  approvePhoto(id: number) {
    this.adminService.approvePhoto(id).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
      this.alertify.success('Photo has been approved');
    }, error => {
      this.alertify.error(error);
    });
  }

  rejectPhoto(id: number) {
    this.alertify.confirm('Are you sure? Rejecting this Photo will delete it from memory', () => {
      this.adminService.rejectPhoto(id).subscribe(() => {
        this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
        this.alertify.success('Photo has been rejected');
      }, error => {
        this.alertify.error(error.error);
      });
    });
  }

}
