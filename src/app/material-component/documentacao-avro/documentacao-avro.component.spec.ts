import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacaoAvroComponent } from './documentacao-avro.component';

describe('DocumentacaoAvroComponent', () => {
  let component: DocumentacaoAvroComponent;
  let fixture: ComponentFixture<DocumentacaoAvroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentacaoAvroComponent]
    });
    fixture = TestBed.createComponent(DocumentacaoAvroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
