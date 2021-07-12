import { TestBed } from '@angular/core/testing';
import { NodeService } from './NodeService.service';


describe('NodeServiceService', () => {
  let service: NodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
function NodeServiceService(NodeServiceService: any): NodeService {
    throw new Error('Function not implemented.');
}

