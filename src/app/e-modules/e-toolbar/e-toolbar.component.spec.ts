import { EtoolbarModule } from './etoolbar.module';

describe('EtoolbarModule', () => {
  let etoolbarModule: EtoolbarModule;

  beforeEach(() => {
    etoolbarModule = new EtoolbarModule();
  });

  it('should create an instance', () => {
    expect(etoolbarModule).toBeTruthy();
  });
});
