import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapearAvroComponent } from './mapear-avro.component';

describe('MapearAvroComponent', () => {
  let component: MapearAvroComponent;
  let fixture: ComponentFixture<MapearAvroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapearAvroComponent]
    });
    fixture = TestBed.createComponent(MapearAvroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
