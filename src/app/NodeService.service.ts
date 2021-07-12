import { Injectable } from "@angular/core";
import { TreeNode } from "primeng/api";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class NodeService {

    constructor(private http: HttpClient) {}

    getFilesystem() {
        console.log("test")
        return this.http.get('assets/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res);
    }
}