import { EModuleModules } from './e-module.modules';

describe('EModuleModule', () => {
  let eModuleModules: EModuleModules;

  beforeEach(() => {
    eModuleModules = new EModuleModules();
  });

  it('should create an instance', () => {
    expect(eModuleModules).toBeTruthy();
  });
});
