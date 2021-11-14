#!/usr/bin/env node

/* IMPORT */

import {program, updater} from 'specialist';
import {name, version} from '../package.json';

/* MAIN */

updater ({ name, version });

program
  .name ( name )
  .version ( version )
  .description ( '//TODO' )
  .action ( () => {} );

program.parse ();
