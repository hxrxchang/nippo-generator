import { UploadPostUsecase } from './upload-post-usecase';
import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UploadReportRepository } from '../repositories/upload-report-repository';
import { MaterialModule } from '../material/material.module';

describe('UploadPostUsecase', () => {
  let usecase: UploadPostUsecase;
  let repository: UploadReportRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MaterialModule],
    });
    usecase = TestBed.get(UploadPostUsecase);
    repository = TestBed.get(UploadReportRepository);
  });

  it('should create an instance', () => {
    expect(usecase).toBeTruthy();
  });

  it('call uploadReport() method', () => {
    const markdown = '# this is test';
    spyOn(repository, 'postToEsa');
    spyOn(repository, 'postToSlack');
    usecase.uploadReport(markdown);
    expect(repository.postToEsa).toHaveBeenCalledWith(markdown);
    expect(repository.postToSlack).toHaveBeenCalledWith(markdown);
  });
});
