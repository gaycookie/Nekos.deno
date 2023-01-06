export interface IResponse { time: number }
export interface ICatResponse extends IResponse { cat: string }
export interface IEightBallResponse extends IResponse { response: string }
export interface IFactResponse extends IResponse { fact: string }
export interface IImageResponse extends IResponse { url: string }
export interface INameResponse extends IResponse { name: string }
export interface IOwOReponse extends IResponse { owo: string }
export interface IWhyResponse extends IResponse { why: string }

// deno-lint-ignore no-explicit-any
async function request(endPoint: string, startTime: number, input?: string): Promise<any> {
  let url = `https://nekos.life/api/v2/${endPoint}`;
  if (input != undefined) url += `?text=${input}`;

  const res = await fetch(url);
  const json = await res.json();

  json['time'] = Date.now() - startTime;
  return json;
}

export class Nekos {
  static cat(): Promise<ICatResponse> { return request("cat", Date.now()); }
  static eightBall(): Promise<IEightBallResponse> { return request("8ball", Date.now()); }
  static fact(): Promise<IFactResponse> { return request("fact", Date.now()); }
  static name_(): Promise<INameResponse> { return request("name", Date.now()); }
  static owoify(text: string): Promise<IOwOReponse> { return request("owoify", Date.now(), text); }
  static why(): Promise<IWhyResponse> { return request("why", Date.now()); }
  
  static avatar(): Promise<IImageResponse> { return request("img/avatar", Date.now()); }
  static cuddle(): Promise<IImageResponse> { return request("img/cuddle", Date.now()); }
  static feed(): Promise<IImageResponse> { return request("img/feed", Date.now()); }
  static foxGirl(): Promise<IImageResponse> { return request("img/fox_girl", Date.now()); }
  static gasm(): Promise<IImageResponse> { return request("img/gasm", Date.now()); }
  static gecg(): Promise<IImageResponse> { return request("img/gecg", Date.now()); }
  static goose(): Promise<IImageResponse> { return request("img/gifter", Date.now()); }
  static hug(): Promise<IImageResponse> { return request("img/hug", Date.now()); }
  static kiss(): Promise<IImageResponse> { return request("img/kiss", Date.now()); }
  static lewd(): Promise<IImageResponse> { return request("img/lewd", Date.now()); }
  static lizard(): Promise<IImageResponse> { return request("img/lizard", Date.now()); }
  static meow(): Promise<IImageResponse> { return request("img/meow", Date.now()); }
  static ngif(): Promise<IImageResponse> { return request("img/ngif", Date.now()); }
  static neko(): Promise<IImageResponse> { return request("img/neko", Date.now()); }
  static pat(): Promise<IImageResponse> { return request("img/pat", Date.now()); }
  static slap(): Promise<IImageResponse> { return request("img/slap", Date.now()); }
  static smug(): Promise<IImageResponse> { return request("img/smug", Date.now()); }
  static spank(): Promise<IImageResponse> { return request("img/spank", Date.now()); }
  static tickle(): Promise<IImageResponse> { return request("img/tickle", Date.now()); }
  static wallpaper(): Promise<IImageResponse> { return request("img/wallpaper", Date.now()); }
  static waifu(): Promise<IImageResponse> { return request("img/waifu", Date.now()); }
  static woof(): Promise<IImageResponse> { return request("img/woof", Date.now()); }
}