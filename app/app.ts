import { Application } from '@nativescript/core';
import { installMixins } from '@nativescript/core';

// Install NS Core mixins
installMixins();

Application.run({ moduleName: 'app-root' });