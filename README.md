# Kaleb Project Test Case
## How to test the project
- First, you need to clone this repository
- Then run those web-be and web-fe at the same time

## How to run Back end
- Run 
``` npm run install ```
- Set up you postgre database to be used by the project. Also don't forget to set your environment. The example is given in .env.development.
- Run
``` npm migrate up ```
- To run the dev environment, run
``` npm run dev ```
- To build the project, run
``` tsc ```
then run
``` npm run start ```

## How to run Front end
- Run
``` npm run install ```
- To run in local, use
``` npm run serve ```
- To build it, use
``` npm run build ```