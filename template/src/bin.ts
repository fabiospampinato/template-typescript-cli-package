#!/usr/bin/env node

/* IMPORT */

import {program, updater} from 'specialist';
import {name, version, description} from '../package.json';

/* MAIN */

updater ({ name, version });

program
  .name ( name )
  .version ( version )
  .description ( description )
  .action ( () => {} );

program.parse ();
