async function request(endPoint: string, startTime: number, input?: string): Promise<any> {
  let url = `https://nekos.life/api/v2/${endPoint}`;
  if (input != undefined) url += `?text=${input}`;

  const res = await fetch(url);
  const json = await res.json();

  json['time'] = Date.now() - startTime;
  return json;
}

export namespace Nekos {
  export interface Response { time: number }
  export interface CatResponse extends Response { cat: string }
  export interface EightBallResponse extends Response { response: string }
  export interface FactResponse extends Response { fact: string }
  export interface ImageResponse extends Response { url: string }
  export interface NameResponse extends Response { name: string }
  export interface OwOReponse extends Response { owo: string }
  export interface WhyResponse extends Response { why: string }

  export const cat = (): Promise<CatResponse> => request("cat", Date.now());
  export const eightBall = (): Promise<EightBallResponse> => request("8ball", Date.now());
  export const fact = (): Promise<FactResponse> => request("fact", Date.now());
  export const name = (): Promise<NameResponse> => request("name", Date.now());
  export const owoify = (text: string): Promise<OwOReponse> => request("owoify", Date.now(), text);
  export const why = (): Promise<WhyResponse> => request("why", Date.now());
  
  export const avatar = (): Promise<ImageResponse> => request("img/avatar", Date.now());
  export const cuddle = (): Promise<ImageResponse> => request("img/cuddle", Date.now());
  export const feed = (): Promise<ImageResponse> => request("img/feed", Date.now());
  export const foxGirl = (): Promise<ImageResponse> => request("img/fox_girl", Date.now());
  export const gasm = (): Promise<ImageResponse> => request("img/gasm", Date.now());
  export const gecg = (): Promise<ImageResponse> => request("img/gecg", Date.now());
  export const goose = (): Promise<ImageResponse> => request("img/gifter", Date.now());
  export const hug = (): Promise<ImageResponse> => request("img/hug", Date.now());
  export const kiss = (): Promise<ImageResponse> => request("img/kiss", Date.now());
  export const lewd = (): Promise<ImageResponse> => request("img/lewd", Date.now());
  export const lizard = (): Promise<ImageResponse> => request("img/lizard", Date.now());
  export const meow = (): Promise<ImageResponse> => request("img/meow", Date.now());
  export const ngif = (): Promise<ImageResponse> => request("img/ngif", Date.now());
  export const neko = (): Promise<ImageResponse> => request("img/neko", Date.now());
  export const pat = (): Promise<ImageResponse> => request("img/pat", Date.now());
  export const slap = (): Promise<ImageResponse> => request("img/slap", Date.now());
  export const smug = (): Promise<ImageResponse> => request("img/smug", Date.now());
  export const spank = (): Promise<ImageResponse> => request("img/spank", Date.now());
  export const tickle = (): Promise<ImageResponse> => request("img/tickle", Date.now());
  export const wallpaper = (): Promise<ImageResponse> => request("img/wallpaper", Date.now());
  export const waifu = (): Promise<ImageResponse> => request("img/waifu", Date.now());
  export const woof = (): Promise<ImageResponse> => request("img/woof", Date.now());
}