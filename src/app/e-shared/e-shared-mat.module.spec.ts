import { EMatSharedModule } from './e-shared-mat.module';

describe('EMatSharedModule', () => {
  let eSharedMatModule: EMatSharedModule;

  beforeEach(() => {
    eSharedMatModule = new EMatSharedModule();
  });

  it('should create an instance', () => {
    expect(eSharedMatModule).toBeTruthy();
  });
});
