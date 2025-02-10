import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbcontainerComponent } from './cbcontainer.component';

describe('CbcontainerComponent', () => {
  let component: CbcontainerComponent;
  let fixture: ComponentFixture<CbcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CbcontainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
