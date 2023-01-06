# Nekos[dot]life API wrapper.
This is a simple wrapper for the [Nekos.life](https://nekos.life) API, written for use with Deno.

## How to use
```ts
/* Import the module */
import { Nekos } from "https://deno.land/x/nekos_deno@1.2.0/mod.ts";

/* Get a random neko image in the console */
Nekos.neko().then(console.log);
```

## Supported Endpoints
The wrapper currently supports the following endpoints:

### Non image endpoints
* `/api/v2/cat`
* `/api/v2/8ball`
* `/api/v2/fact`
* `/api/v2/name`
* `/api/v2/owoify` (takes a text argument)
* `/api/v2/why`

### Image endpoints
* `/api/v2/img/avatar`
* `/api/v2/img/cuddle`
* `/api/v2/img/feed`
* `/api/v2/img/fox_girl`
* `/api/v2/img/gasm`
* `/api/v2/img/gecg`
* `/api/v2/img/goose`
* `/api/v2/img/hug`
* `/api/v2/img/kiss`
* `/api/v2/img/lewd`
* `/api/v2/img/lizard`
* `/api/v2/img/meow`
* `/api/v2/img/ngif`
* `/api/v2/img/neko`
* `/api/v2/img/pat`
* `/api/v2/img/slap`
* `/api/v2/img/smug`
* `/api/v2/img/spank`
* `/api/v2/img/tickle`
* `/api/v2/img/wallpaper`
* `/api/v2/img/waifu`
* `/api/v2/img/woof`

## Disclaimer
This wrapper provides access to the Nekos.life API, which is not developed or maintained by me. The API and its endpoints may stop working or change at any time, and the wrapper may not be updated to reflect these changes. Use of the wrapper and the API is at the user's own risk.

For more information about the API and its endpoints see the list of endpoints at [/api/v2/endpoints](https://nekos.life/api/v2/endpoints).