
/* IMPORT */

import * as Caporal from 'caporal';
import chalk from 'chalk';
import * as readPkg from 'read-pkg-up';
import * as updateNotifier from 'update-notifier';
import {{_ "camelCase" name}} from '.';

const caporal = Caporal as any;

/* CLI */

async function CLI () {

  /* APP */

  const {pkg} = await readPkg ({ cwd: __dirname });

  updateNotifier ({ pkg }).notify ();

  const app = caporal.version ( pkg.version );

  /* COMMAND */

  app.option ( '--option <foo>', 'This is an option' )
     .action ( {{_ "camelCase" name}} );

  /* HELP */

  const command = app['_defaultCommand'];
  const helpLines = [
    `{{name}} ${chalk.green ( '--option' )} ${chalk.blue ( 'foo' )}`
  ];

  command.help ( helpLines.join ( '\n' ), { name: 'USAGE - ADVANCED' } );

  /* PARSE */

  caporal.parse ( process.argv );

}

/* EXPORT */

export default CLI;
