import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { routeSourceGuard } from './route-source.guard';

describe('routeSourceGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => routeSourceGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
