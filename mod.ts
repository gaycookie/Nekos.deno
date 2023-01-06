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

export const Nekos = {
  cat: (): Promise<ICatResponse> => request("cat", Date.now()),
  eightBall: (): Promise<IEightBallResponse> => request("8ball", Date.now()),
  fact: (): Promise<IFactResponse> => request("fact", Date.now()),
  name: (): Promise<INameResponse> => request("name", Date.now()),
  owoify: (text: string): Promise<IOwOReponse> => request("owoify", Date.now(), text),
  why: (): Promise<IWhyResponse> => request("why", Date.now()),
  
  avatar: (): Promise<IImageResponse> => request("img/avatar", Date.now()),
  cuddle: (): Promise<IImageResponse> => request("img/cuddle", Date.now()),
  feed: (): Promise<IImageResponse> => request("img/feed", Date.now()),
  foxGirl: (): Promise<IImageResponse> => request("img/fox_girl", Date.now()),
  gasm: (): Promise<IImageResponse> => request("img/gasm", Date.now()),
  gecg: (): Promise<IImageResponse> => request("img/gecg", Date.now()),
  goose: (): Promise<IImageResponse> => request("img/gifter", Date.now()),
  hug: (): Promise<IImageResponse> => request("img/hug", Date.now()),
  kiss: (): Promise<IImageResponse> => request("img/kiss", Date.now()),
  lewd: (): Promise<IImageResponse> => request("img/lewd", Date.now()),
  lizard: (): Promise<IImageResponse> => request("img/lizard", Date.now()),
  meow: (): Promise<IImageResponse> => request("img/meow", Date.now()),
  ngif: (): Promise<IImageResponse> => request("img/ngif", Date.now()),
  neko: (): Promise<IImageResponse> => request("img/neko", Date.now()),
  pat: (): Promise<IImageResponse> => request("img/pat", Date.now()),
  slap: (): Promise<IImageResponse> => request("img/slap", Date.now()),
  smug: (): Promise<IImageResponse> => request("img/smug", Date.now()),
  spank: (): Promise<IImageResponse> => request("img/spank", Date.now()),
  tickle: (): Promise<IImageResponse> => request("img/tickle", Date.now()),
  wallpaper: (): Promise<IImageResponse> => request("img/wallpaper", Date.now()),
  waifu: (): Promise<IImageResponse> => request("img/waifu", Date.now()),
  woof: (): Promise<IImageResponse> => request("img/woof", Date.now())
}