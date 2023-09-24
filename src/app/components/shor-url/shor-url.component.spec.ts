import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorUrlComponent } from './shor-url.component';

describe('ShorUrlComponent', () => {
  let component: ShorUrlComponent;
  let fixture: ComponentFixture<ShorUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShorUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShorUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
