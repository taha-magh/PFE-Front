import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPesonnelCommuneComponent } from './list-pesonnel-commune.component';

describe('ListPesonnelCommuneComponent', () => {
  let component: ListPesonnelCommuneComponent;
  let fixture: ComponentFixture<ListPesonnelCommuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPesonnelCommuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPesonnelCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
