/* ****************************************************************
 * * GraphQL Types
 **************************************************************** */

// User
export interface User {
  id: number;
  username: string;
  image: string;
  bio?: string;

  // SocialUserData fragment
  url?: string;
  socials?: Array<UserSocial>;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  fullName?: string;
  followCount?: number;
  followerCount?: number;

  // RolesUserData fragment
  roles?: Array<UserRole>;
}

export interface UserSocial {
  id: number;
  url: string;
  type: UserSocialType;
}

export enum UserSocialType {
  twitter = "twitter",
  github = "github",
  linkedin = "linkedin",
  website = "website",
  youtube = "youtube",
  twitch = "twitch",
  facebook = "facebook",
  discord = "discord",
}
export interface UserRole {
  id: number;
  name: string;
  key: string;
  tagline: string;
}

/* ****************************************************************
 * * Theme Types
 **************************************************************** */
export type CssColor = string;

export interface ThemeValuesGlobal {
  __typename?: string;
  backgroundRoot: CssColor;
  backgroundDefault: CssColor;
  backgroundHigher: CssColor;
  backgroundHighest: CssColor;
  backgroundOverlay: CssColor;
  foregroundDefault: CssColor;
  foregroundDimmer: CssColor;
  foregroundDimmest: CssColor;
  outlineDimmest: CssColor;
  outlineDimmer: CssColor;
  outlineDefault: CssColor;
  outlineStronger: CssColor;
  outlineStrongest: CssColor;
  accentPrimaryDimmest: CssColor;
  accentPrimaryDimmer: CssColor;
  accentPrimaryDefault: CssColor;
  accentPrimaryStronger: CssColor;
  accentPrimaryStrongest: CssColor;
  accentPositiveDimmest: CssColor;
  accentPositiveDimmer: CssColor;
  accentPositiveDefault: CssColor;
  accentPositiveStronger: CssColor;
  accentPositiveStrongest: CssColor;
  accentNegativeDimmest: CssColor;
  accentNegativeDimmer: CssColor;
  accentNegativeDefault: CssColor;
  accentNegativeStronger: CssColor;
  accentNegativeStrongest: CssColor;
  redDimmest: CssColor;
  redDimmer: CssColor;
  redDefault: CssColor;
  redStronger: CssColor;
  redStrongest: CssColor;
  orangeDimmest: CssColor;
  orangeDimmer: CssColor;
  orangeDefault: CssColor;
  orangeStronger: CssColor;
  orangeStrongest: CssColor;
  yellowDimmest: CssColor;
  yellowDimmer: CssColor;
  yellowDefault: CssColor;
  yellowStronger: CssColor;
  yellowStrongest: CssColor;
  limeDimmest: CssColor;
  limeDimmer: CssColor;
  limeDefault: CssColor;
  limeStronger: CssColor;
  limeStrongest: CssColor;
  greenDimmest: CssColor;
  greenDimmer: CssColor;
  greenDefault: CssColor;
  greenStronger: CssColor;
  greenStrongest: CssColor;
  tealDimmest: CssColor;
  tealDimmer: CssColor;
  tealDefault: CssColor;
  tealStronger: CssColor;
  tealStrongest: CssColor;
  blueDimmest: CssColor;
  blueDimmer: CssColor;
  blueDefault: CssColor;
  blueStronger: CssColor;
  blueStrongest: CssColor;
  blurpleDimmest: CssColor;
  blurpleDimmer: CssColor;
  blurpleDefault: CssColor;
  blurpleStronger: CssColor;
  blurpleStrongest: CssColor;
  purpleDimmest: CssColor;
  purpleDimmer: CssColor;
  purpleDefault: CssColor;
  purpleStronger: CssColor;
  purpleStrongest: CssColor;
  magentaDimmest: CssColor;
  magentaDimmer: CssColor;
  magentaDefault: CssColor;
  magentaStronger: CssColor;
  magentaStrongest: CssColor;
  pinkDimmest: CssColor;
  pinkDimmer: CssColor;
  pinkDefault: CssColor;
  pinkStronger: CssColor;
  pinkStrongest: CssColor;
  greyDimmest: CssColor;
  greyDimmer: CssColor;
  greyDefault: CssColor;
  greyStronger: CssColor;
  greyStrongest: CssColor;
  brownDimmest: CssColor;
  brownDimmer: CssColor;
  brownDefault: CssColor;
  brownStronger: CssColor;
  brownStrongest: CssColor;
  black: CssColor;
  white: CssColor;
}

export enum ColorScheme {
  Light = "light",
  Dark = "dark",
}

export interface CustomTheme {
  author: User;
  colorScheme: ColorScheme;
  hasUnpublishedChanges: boolean;
  id: number;
  isCurrentUserThemeAuthor: boolean;
  isInstalledByCurrentUser: boolean;
  latestThemeVersion: ThemeVersion;
  numInstalls?: number;
  slug?: string;
  status?: "public" | "private";
  title?: string;
}

export interface ThemeSyntaxHighlightingTag {
  __typename: string;
  name: string;
  modifiers: null | Array<string>;
}

export interface ThemeSyntaxHighlightingModifier {
  textDecoration?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  color?: string;
}

export interface ThemeEditorSyntaxHighlighting {
  __typename: string;
  tags: Array<ThemeSyntaxHighlightingTag>;
  values: ThemeSyntaxHighlightingModifier;
}

export interface ThemeValuesEditor {
  editor: Array<ThemeEditorSyntaxHighlighting>;
}

export interface ThemeValues {
  __typename?: string;
  editor: ThemeValuesEditor;
  global: ThemeValuesGlobal;
}

export interface ThemeVersion {
  __typename?: string;
  id: number;
  hue: number;
  lightness: number;
  saturation: number;
  timeUpdated?: string;
  description?: string;
  customTheme?: CustomTheme;
  values?: ThemeValues;
}
