import { DatePipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display year in copyright', () => {
    const datePipe = new DatePipe('en-us');
    const year = datePipe.transform(Date.now(), 'yyyy'); // ?

    const el: HTMLElement = fixture.debugElement.query(By.css('span'))
      .nativeElement;

    expect(component.today).toBeTruthy();
    expect(el.textContent).toContain(year);
  });
});
