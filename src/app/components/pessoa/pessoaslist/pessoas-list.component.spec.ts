import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaslistComponent } from './pessoas-list.component';

describe('PessoasListComponent', () => {
  let component: PessoaslistComponent;
  let fixture: ComponentFixture<PessoaslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PessoaslistComponent]
    });
    fixture = TestBed.createComponent(PessoaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
