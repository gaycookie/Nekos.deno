/**
 * @enum {string} Endpoints
 */
export enum RandomName {
  CAT         = "/api/v2/cat",
  EIGHT_BALL  = "/api/v2/8ball",
  FACT        = "/api/v2/fact",
  NAME        = "/api/v2/name",
  OWOIFY      = "/api/v2/owoify",
  WHY         = "/api/v2/why",
  AVATAR      = "/api/v2/img/avatar",
  CUDDLE      = "/api/v2/img/cuddle",
  FEED        = "/api/v2/img/feed",
  FOX_GIRL    = "/api/v2/img/fox_girl",
  GASM        = "/api/v2/img/gasm",
  GECG        = "/api/v2/img/gecg",
  GOOSE       = "/api/v2/img/goose",
  HUG         = "/api/v2/img/hug",
  KISS        = "/api/v2/img/kiss",
  LEWD        = "/api/v2/img/lewd",
  LIZARD      = "/api/v2/img/lizard",
  MEOW        = "/api/v2/img/meow",
  NEKO        = "/api/v2/img/neko",
  PAT         = "/api/v2/img/pat",
  SLAP        = "/api/v2/img/slap",
  SMUG        = "/api/v2/img/smug",
  SPANK       = "/api/v2/img/spank",
  TICKLE      = "/api/v2/img/tickle",
  WALLPAPER   = "/api/v2/img/wallpaper",
  WAIFU       = "/api/v2/img/waifu",
  WOOF        = "/api/v2/img/woof"
}

/**
 * @param {string} cat: Response given by Cat endpoint.
 * @param {string} response: Response given by 8ball endpoint together with url.
 * @param {string} fact: Reponse given by Fact endpoint.
 * @param {string} name: Reponse given by Name endpoint.
 * @param {string} msg: Reponse given when an error occured.
 * @param {string} owo: Reponse given by Owoify endpoint.
 * @param {string} why: Reponse given by Why endpoint.
 * @param {number} time: The time in ms it took to get a reponse back from the API.
 */
export interface IResponse { 
  cat?: string;
  response?: string;
  fact?: string;
  url?: string;
  name?: string;
  msg?: string;
  owo?: string;
  why?: string;
  time: number;
}

async function request(path: string, text?: string): Promise<IResponse> {
  let url: string = "https://nekos.life" + path;
  if (text) url += `?text=${text}`;

  const startTime = Date.now();
  const res = await fetch(url);
  const json = await res.json();

  json['time'] = Date.now() - startTime;
  return json;
}

export class Nekos {
  /**
   * @param {RandomName} name: Name of the endpoint. eg. RandomName.NEKO
   * @param {string} text: (Optional) Needed for some endpoints.
   * @returns {Promise<IResponse>} Promise
   */
  static random(name: RandomName, text?: string): Promise<IResponse> {
    return request(name, text);
  }
}