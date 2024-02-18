// Interface automatically generated by schemas-to-ts

export enum Social {
  Youtube = 'YOUTUBE',
  Twitter = 'TWITTER',
  Discord = 'DISCORD',
  Website = 'WEBSITE',}

export interface SocialLink {
  url: string;
  newTab?: boolean;
  text: string;
  social?: Social;
}
export interface SocialLink_Plain {
  url: string;
  newTab?: boolean;
  text: string;
  social?: Social;
}

export interface SocialLink_NoRelations {
  url: string;
  newTab?: boolean;
  text: string;
  social?: Social;
}

