
/** 
 * These are replacer variables between production and developement.
 * During a production build this file is replaced with the corresponding
 * `*.prod.ts` file
 */

/** 
 * We require this Socket.io connection during developement because
 * the `ng serve` command serves the frontend from port `4200` but
 * the actual server is running on `3000`.
 * Production will have the domain we are hosting on.
 */
export const socketUrl = 'http://localhost:3000';