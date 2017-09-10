import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBagComponent } from './shop-bag.component';

describe('ShopBagComponent', () => {
  let component: ShopBagComponent;
  let fixture: ComponentFixture<ShopBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
