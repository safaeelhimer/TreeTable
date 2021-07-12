import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../NodeService.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  
  files: TreeNode[] = [];
  cols: any[] = [];

    constructor(private nodeService: NodeService) { 
      this.nodeService.getFilesystem().then(
        files => {
        this.files = files;
        console.log("testing", this.files);
        });
    }

    ngOnInit() {
        /*this.nodeService.getFilesystem().then(
          files => {
          this.files = files;
          console.log("testing", this.files);
          });*/
        
          console.log("testing22", this.files);

         

        this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'size', header: 'Size' },
          { field: 'type', header: 'Type' }
      ];


    }

      ngAfterViewInit()
      {
        console.log("testing33", this.files);

      }
    

}

