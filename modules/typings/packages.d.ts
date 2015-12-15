//declare function require(name:string): void;

declare module "blaze-to-react" {
  var something: any; // class AceEditor extends __React.Component<{}, {}> {}
  export default something;
}

// declare module "react-mixin" {
//   let something: any; // class AceEditor extends __React.Component<{}, {}> {}
//   export default something;
// }

declare module "react-router" {
  let s: any; // class AceEditor extends __React.Component<{}, {}> {}
  export let ReactRouter: any;
  export let Router: any;
  export let Route: any;
  export let IndexRoute: any;
  export default s;
}

declare module "react-meteor-data" {
  let something: any; // class AceEditor extends __React.Component<{}, {}> {}
  export default something;
}

// declare class SubsManager {
//   subscribe(route: string, ...params: any[]) : any;
// }

declare let ReactRouter: any;
declare let ReactLayout: any;
declare let BlazeToReact: any;


declare function If (condition: any): any;
declare function For(each: string, index: string, of: any): any;
declare var Else: any;

declare module GlobalConfig {
  export var S3Bucket: string;
  export function parseText(text: string): string;
}
