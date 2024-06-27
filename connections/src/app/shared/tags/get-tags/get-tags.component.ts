import { Component } from '@angular/core';
import { Tags } from 'src/app/core/models/tags.interface';
import { TagsService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-get-tags',
  templateUrl: './get-tags.component.html',
  styleUrls: ['./get-tags.component.css'],
})
export class GetTagsComponent {
  tags: Tags[] = [];

  constructor(private orgService: TagsService) {}

  ngOnInit(): void {
    //get all tags
    this.orgService.getTags().subscribe({
      next: (data) => {
        this.tags = data;
        console.log('Tags:', this.tags);
      },
      error: (error) => {
        console.error('Error fetching tags:', error);
      },
      complete: () => {
        console.log('Request to fetch Tag completed');
      },
    });
  }
}
